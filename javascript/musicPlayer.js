document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');
    const music = document.getElementById('music');
    const soundIcon = document.getElementById('soundIcon');

    // Variable para controlar si la música está en pausa o reproduciendo.
    let isPlaying = true;
    music.pause();
    // Función para cambiar el ícono y controlar la música.
    function toggleMusic() {
        if (isPlaying) {
            music.pause();
            soundIcon.src = 'media/icons/mute.png';
        } else {
            music.play();
            soundIcon.src = 'media/icons/sound.png';
        }

        // Invertir el estado de reproducción.
        isPlaying = !isPlaying;
    }

    // Establecer el volumen al 20%.
    music.volume = 0.2;

    // Agregar un evento de clic al botón para alternar la música.
    button.addEventListener('click', toggleMusic);
});
