// Gestion de l'intro
document.getElementById('start-button').addEventListener('click', function () {
    // Cache la section intro
    document.getElementById('intro').style.display = 'none';

    // Affiche le contenu principal
    document.getElementById('main-content').style.display = 'block';

    // Démarre l'audio
    document.getElementById('intro-audio').play();
});

// Gestion du slider
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
