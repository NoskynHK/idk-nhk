// Fotogrammi ASCII dettagliati del ballo in loop
const caramelFrames = [
    `<span style="color:#00ffff">,;Iii:::;;::::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::;;;;;;;;;;i;;,</span>\n` +
    `<span style="color:#00ffaa">,;;iiiiiiiii;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiiiii;;,</span>\n` +
    `<span style="color:#ffcc00">  ........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,..  </span>\n` +
    `<span style="color:#ff66cc">  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  </span>\n` +
    `<span style="color:#ff3399">  @@@@@@@@@@@@@@@@@@@@@@@@@@@@  <span style="color:#ffffff">MANI SULLE ORECCHIE!</span>  @@@@@@@@@@@@@@@@@@@@@@@@@@@@  </span>\n` +
    `<span style="color:#ff66cc">  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  </span>\n` +
    `<span style="color:#00aaff">  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  </span>`,

    `<span style="color:#00ffff">,;Iii:::;;::::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::;;;;;;;;;;i;;,</span>\n` +
    `<span style="color:#00ffaa">,;;iiiiiiiii;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iiiiiii;;,</span>\n` +
    `<span style="color:#ffcc00">  ........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,..  </span>\n` +
    `<span style="color:#ff66cc">  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  </span>\n` +
    `<span style="color:#ff3399">  @@@@@@@@@@@@@@@@@@@@@@@@@@@@   <span style="color:#ffffff">O - A - O ! DANCE!</span>   @@@@@@@@@@@@@@@@@@@@@@@@@@@@  </span>\n` +
    `<span style="color:#ff66cc">  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  </span>\n` +
    `<span style="color:#00aaff">  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;###;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  </span>`
];

let caramelFrameIndex = 0;
let caramelInterval = null;

// Avvia automaticamente l'animazione e prova a far partire l'audio all'apertura della pagina
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('caramel-song');
    const container = document.getElementById('caramel-ascii-container');

    // Avvia loop animazione ASCII
    caramelInterval = setInterval(() => {
        container.innerHTML = caramelFrames[caramelFrameIndex];
        caramelFrameIndex = (caramelFrameIndex + 1) % caramelFrames.length;
    }, 90);

    // Tentativo di riproduzione audio automatica
    if (audio) {
        audio.play().catch(() => {
            console.log("Autoplay bloccato dal browser: l'utente deve cliccare il pulsante per attivare l'audio.");
        });
    }
});

// Funzione legata al pulsante per avviare o mettere in pausa la musica manualmente se viene bloccata
function togglePlayMusic() {
    const audio = document.getElementById('caramel-song');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
