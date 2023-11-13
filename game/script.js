const petBtn = document.querySelector("#action-pet");
const feedBtn = document.querySelector("#action-feed");
const playBtn = document.querySelector("#action-play");

const startBtn = document.querySelector("#action-menu-start-game");
const settingsBtn = document.querySelector("#action-menu-settings");
const settingsBackBtn = document.querySelector("#action-settings-back");
const difHardBtn = document.querySelector("#action-settings-difficulty-hard");
const difNormalBtn = document.querySelector("#action-settings-difficulty-normal");
const difEasyBtn = document.querySelector("#action-settings-difficulty-easy");

//Constants for main bar
const gentlenessHp = document.querySelector("#gentleness-hp");
const energyHp = document.querySelector("#energy-hp");
const playHp = document.querySelector("#play-hp");
const scoreBar = document.querySelector("#score");
//

//audio//
const petSound = new Audio("petSound.m4a");
const bowSound = new Audio("bowSound.m4a");
const feedSound = new Audio("feedSound.m4a");

//Game settings
const maxGentleness = 300;
const maxEnergy = 300;
const maxPlay = 300;
//Game speed
let day = 20;

//New object
function Tamagotchi() {
  this.gentleness = maxGentleness;
  this.energy = maxEnergy;
  this.play = maxPlay;
}

//Abilities
Tamagotchi.prototype.actionPet = function() {
    this.gentleness+=40 / (day * 2)
};

Tamagotchi.prototype.actionFeed = function() {
	this.energy+=120 / (day * 2)
};

Tamagotchi.prototype.actionPlay = function() {
	this.play+=80 / (day * 2)
};

Tamagotchi.prototype.tick = function() {
    this.gentleness--;
    this.energy-=3;
    this.play-=2;
};

let tmgch = new Tamagotchi();
let gentlenessHpCount;
let energyHpCount;
let playHpCount;
let score = 0;

//Controllers
petBtn.addEventListener("click", function() {
	tmgch.actionPet();
	petSound.play();
});

feedBtn.addEventListener("click", function() {
	tmgch.actionFeed();
	feedSound.play();
});

playBtn.addEventListener("click", function() {
	tmgch.actionPlay();
	bowSound.play();
});

startBtn.addEventListener("click", function() {
	startGame();
});

settingsBtn.addEventListener("click", function() {
	settingsMenu();
});

difHardBtn.addEventListener("click", function() {
	day = 5;
	document.querySelector("#difSet").innerHTML = "Hard";
});

difNormalBtn.addEventListener("click", function() {
	day = 20;
	document.querySelector("#difSet").innerHTML = "Normal";
});

difEasyBtn.addEventListener("click", function() {
	day = 40;
	document.querySelector("#difSet").innerHTML = "Easy";
});

settingsBackBtn.addEventListener("click", function() {
	MainMenu();
});


//Togglers for buttons
document.querySelector(".game-screen").classList.toggle("hide");
document.querySelector(".menu-screen-settings").classList.toggle("hide");

function MainMenu() {
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");
}

function settingsMenu() {
	document.querySelector(".main-menu-screen").classList.toggle("hide");
	document.querySelector(".menu-screen-settings").classList.toggle("hide");
}

function startGame() {
	document.querySelector(".game-screen").classList.toggle("hide");
	document.querySelector(".main-menu-screen").classList.toggle("hide");

	//Start game
	core();
	let coreUpdate = setInterval(core, 100 * day);

	//Main function of tamagotchi
	function core() {
		//console.log(tmgch);
		gentlenessHpCount = (tmgch.gentleness / maxGentleness * 100).toFixed(2);
		energyHpCount = (tmgch.energy / maxEnergy * 100).toFixed(2);
		playHpCount = (tmgch.play / maxPlay * 100).toFixed(2);

		//Scores
		score++;
		scoreBar.innerHTML = score;

		//Death ability
		if ((playHpCount <= 0) || (gentlenessHpCount <= 0) || (energyHpCount <= 0)) {
			playHpCount = 0;
			gentlenessHpCount = 0;
			energyHpCount = 0;
			clearInterval(coreUpdate);
			alert('Your score: ' + score );
		}

		//Max health percentage (real)
		//Little help for player
		if (tmgch.gentleness >= (maxGentleness + (maxGentleness / 100 * 20))) {
			tmgch.gentleness = maxGentleness + (maxGentleness / 100 * 20);
		}

		if (tmgch.energy >= (maxEnergy + (maxEnergy / 100 * 20))) {
			tmgch.energy = maxEnergy + (maxEnergy / 100 * 20);
		}

		if (tmgch.play >= (maxPlay + (maxPlay / 100 * 20))) {
			tmgch.play = maxPlay + (maxPlay / 100 * 20);
		}

		//Max health percentage (for player)
		if ((tmgch.gentleness / maxGentleness * 100) > 100) {
			gentlenessHpCount = 100;
		}
		if ((tmgch.energy / maxEnergy * 100) > 100) {
			energyHpCount = 100;
		}
		if ((tmgch.play / maxPlay * 100) > 100) {
			playHpCount = 100;
		}

		//Show HP on screen
		gentlenessHp.innerHTML = gentlenessHpCount;
		energyHp.innerHTML = energyHpCount;
		playHp.innerHTML = playHpCount;

		//Remove HP every tick
		tmgch.tick();

		
	}
}