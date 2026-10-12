const video = document.getElementById('source-video');
const audio = document.getElementById('source-audio');
const asciiScreen = id => document.getElementById('ascii-screen');

// Rampa di caratteri ordinata per luminosità (dal più scuro al più chiaro)
const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

// Risoluzione della griglia ASCII (puoi regolarla se vuoi più o meno dettaglio)
const cols = 120; 
const rows = 45;

const canvas = document.createElement('canvas');
canvas.width = cols;
canvas.height = rows;
const ctx = canvas.getContext('2d');

function processFrame() {
    if (video.paused || video.ended) return;

    // Disegna il fotogramma corrente del video sul canvas ridimensionato
    ctx.drawImage(video, 0, 0, cols, rows);
    const pixels = ctx.getImageData(0, 0, cols, rows).data;

    let htmlOutput = "";

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const offset = (y * cols + x) * 4;
            const r = pixels[offset];
            const g = pixels[offset + 1];
            const b = pixels[offset + 2];

            // Calcolo della luminosità (formula standard di luminanza)
            const avg = (r * 0.3 + g * 0.59 + b * 0.11);
            
            // Mappa la luminosità sul carattere ASCII corrispondente
            const charIndex = Math.floor((avg / 255) * (density.length - 1));
            const char = density[charIndex];

            // Applica il colore RGB reale estratto dal video
            htmlOutput += `<span style="color:rgb(${r},${g},${b})">${char === ' ' ? '&nbsp;' : char}</span>`;
        }
        htmlOutput += "\n";
    }

    document.getElementById('ascii-screen').innerHTML = htmlOutput;

    // Richiama il prossimo fotogramma in tempo reale
    requestAnimationFrame(processFrame);
}

// Gestione dell'avvio e della riproduzione
function togglePlay() {
    if (video.paused) {
        video.play();
        audio.play();
        requestAnimationFrame(processFrame);
        document.getElementById('play-pause-btn').innerText = "⏸ Pausa";
    } else {
        video.pause();
        audio.pause();
        document.getElementById('play-pause-btn').innerText = "▶ Riprendi";
    }
}

// Avvio automatico al caricamento della pagina
window.addEventListener('DOMContentLoaded', () => {
    video.muted = false; // Mettilo a true se vuoi che l'audio parta solo dall'elemento audio dedicato
    video.play().then(() => {
        audio.play();
        requestAnimationFrame(processFrame);
        document.getElementById('play-pause-btn').innerText = "⏸ Pausa";
    }).catch(err => {
        console.log("Autoplay bloccato dal browser, l'utente deve cliccare il pulsante.", err);
    });
});
