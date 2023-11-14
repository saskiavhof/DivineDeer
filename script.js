
document.getElementById('todaji').style.cursor = 'pointer';
document.getElementById('shrine').style.cursor = 'pointer';
document.getElementById('senbei').style.cursor = 'pointer';
document.getElementById('takemikazuchi').style.cursor = 'pointer';
document.getElementById('deer').style.cursor = 'pointer';
document.getElementById('babyDeer').style.cursor = 'pointer';


document.getElementById('todaji').addEventListener('click', function () {
    showPopup("Buddhism", "Todaji Temple is central to Nara Park, in the same way that Buddhism is central to the protection and history of the Nara deer. Although Shintoism came before Buddhism in Japan, they became intertwined over time. The “Deer Mandala of Kasuga Shrine” depicts the shinto story of Takemikazuchi on a white deer underneath a reflection of five buddhist deities. This showed that by the fouthteeth century, the fusion of Buddhism and Shinto led to the belief in Shinto ‘kami’ as manifestation of Buddhist deities. The deer’s divine nature was reasserted by the monks of the Kofuku-ji Buddhist temple in Nara, who considered killing one to be a crime punishable by death. Deer are also significant to buddhism as they symbolize Buddha’s first teachings and the act of receiving them. The Setting in Motion of the Wheel of the Dhamma Sutta (or Dhammacakkappavattana Sutta) recounts Buddha's first teachings in Deer Park, Samath, India. As Buddha spoke to five skeptics, a doe and a stag emerged from the forest and stood beside the dharma wheel, attentively listening.");
});

document.getElementById('shrine').addEventListener('click', function () {
    showPopup("Shintoism", "The indigenous spirituality of Japan, shintoism, regards animals as integral to the natural world and emphasizes a harmonious relationship between humans and nature. In Shinto beliefs, various animals are considered sacred or are tied to legends, such as foxes, koi fish, Japanese macaques, tanukis, and wild boars. Deer, in particular, are highly revered in Shintoism and are viewed as messengers of the gods in some parts of the country, including Nara.");
});

document.getElementById('senbei').addEventListener('click', function () {
    showPopup("Deer Senbei", "Etiam lacinia justo a enim ultrices, vel fringilla arcu hendrerit. Integer vestibulum leo a metus scelerisque, id venenatis leo imperdiet. Mauris auctor quam nec sem tincidunt, vel ultricies lectus facilisis. Sed auctor, lacus nec gravida pulvinar, ligula velit tincidunt turpis, a bibendum mi eros nec dolor.");
});

document.getElementById('takemikazuchi').addEventListener('click', function () {
    showPopup("The Legend of Takemikazuchi", "In the 6th century, Japanese mythology was chronicled in the Kojiki, an early record of myths and legends. Takemikazuchi, the Shinto god of thunder, swords, and sumo wrestling, was one of the prominent deities. By the 8th century, a legend emerged depicting Takemikazuchi riding into the city of Nara on a white deer, establishing the first Japanese Dynasty. This legend led to deer being revered as messengers of the gods in Nara.");
});

document.getElementById('deer').addEventListener('click', function () {
    showPopupWithButton("Deer", "Play a Tamagochi-style game and virtually feed, pet, and bow with a deer!                                                                                                                                                                                                                 ");
});

document.getElementById('babyDeer').addEventListener('click', function () {
    showPopup("Learned Behaviors", "Nara Park has a unique custom of feeding specialized cookies to the park’s free ranging sika deer, who display a behavior similar to bowing to their feeders. Observations on these bowing behaviors found that it is a habit developed with age, and socially influenced by the behaviors of the surrounding deer.");
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

