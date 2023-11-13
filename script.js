
document.getElementById('todaji').style.cursor = 'pointer';
document.getElementById('shrine').style.cursor = 'pointer';
document.getElementById('senbei').style.cursor = 'pointer';
document.getElementById('takemikazuchi').style.cursor = 'pointer';
document.getElementById('deer').style.cursor = 'pointer';
document.getElementById('babyDeer').style.cursor = 'pointer';


document.getElementById('todaji').addEventListener('click', function () {
    showPopup("Buddhism", "The Todaji temple, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies velit in urna feugiat, nec feugiat libero consequat. Fusce at sollicitudin sapien. Vivamus convallis, nisi sit amet ullamcorper aliquet, odio metus luctus urna, id bibendum orci odio nec libero.");
});

document.getElementById('shrine').addEventListener('click', function () {
    showPopup("Shintoism", "Nullam vehicula justo ac massa fermentum, non euismod ante convallis. Nunc tristique eu metus vel condimentum. Morbi eu feugiat libero. Quisque ut hendrerit mi. Proin eget dui ac augue faucibus convallis.");
});

document.getElementById('senbei').addEventListener('click', function () {
    showPopup("Deer Senbei", "Etiam lacinia justo a enim ultrices, vel fringilla arcu hendrerit. Integer vestibulum leo a metus scelerisque, id venenatis leo imperdiet. Mauris auctor quam nec sem tincidunt, vel ultricies lectus facilisis. Sed auctor, lacus nec gravida pulvinar, ligula velit tincidunt turpis, a bibendum mi eros nec dolor.");
});

document.getElementById('takemikazuchi').addEventListener('click', function () {
    showPopup("The Legend of Takemikazuchi", "In hac habitasse platea dictumst. Curabitur non condimentum erat. Vestibulum efficitur a odio vitae tincidunt. Integer fringilla sapien ac dui suscipit, vel laoreet justo auctor. Nam vehicula, ex sit amet viverra posuere, odio lectus lacinia justo, vel cursus risus urna nec enim.");
});

document.getElementById('deer').addEventListener('click', function () {
    showPopupWithButton("Deer", "Aliquam tincidunt felis vel dui blandit, eget varius libero bibendum. Aenean sed dolor quis eros condimentum vehicula. Ut sagittis efficitur sapien, id suscipit dolor fringilla a. Integer accumsan libero non bibendum congue. Curabitur auctor tortor vel tellus feugiat, vitae congue libero cursus. Play a Tamagochi-style game and virtually feed, pet, and bow with a deer!");
});

document.getElementById('babyDeer').addEventListener('click', function () {
    showPopup("Learned Behaviors", "In hac habitasse platea dictumst. Curabitur non condimentum erat. Vestibulum efficitur a odio vitae tincidunt. Integer fringilla sapien ac dui suscipit, vel laoreet justo auctor. Nam vehicula, ex sit amet viverra posuere, odio lectus lacinia justo, vel cursus risus urna nec enim.");
});


function showPopup(title, content) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerText = content;


    document.getElementById('overlay').style.display = 'flex';
}

function showPopupWithButton(title, content) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-content').innerText = content;

    var buttonBox = document.createElement('div');
    buttonBox.className = 'buttonbox';
    
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'button';
    button.innerText = 'Play in new window';

    button.style.padding = '10px';  // Padding for spacing
    button.style.cursor = 'pointer';  // Change cursor on hover to indicate it's clickable
    button.style.transition = 'background-color 0.3s, color 0.3s';
    button.setAttribute('aria-label', '');

    button.addEventListener('click', function () {
        window.open('game/game.html', '_blank');
    });

    buttonBox.appendChild(button);



    var popupContent = document.getElementById('popup-content');
    popupContent.appendChild(buttonBox);


    document.getElementById('overlay').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('overlay').style.display = 'none';
}

