
// Efeito de favoritar obras
function favoritar(botao) {
    botao.classList.toggle("favorited");

    if (botao.classList.contains("favorited")) {
        botao.textContent = "★";
    } else {
        botao.textContent = "☆";
    }
}

// Imagens utilizadas no jogo da memória
const imagens = [
    "https://upload.wikimedia.org/wikipedia/en/6/6f/Banksy_Girl_and_Balloon.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Banksy_Flower_Thrower.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Banksy_Laugh_Now.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Banksy_Kissing_Coppers.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Banksy_No_Ball_Games.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Banksy_One_Nation_Under_CCTV.jpg"
];

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let jogadas = 0;
let pares = 0;

function iniciarJogo() {
    const jogo = document.getElementById("memory-game");

    if (!jogo) return;

    jogo.innerHTML = "";
    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;
    jogadas = 0;
    pares = 0;

    document.getElementById("moves").textContent = jogadas;
    document.getElementById("pairs").textContent = pares;
    document.getElementById("game-message").textContent = "";

    let cartas = [...imagens, ...imagens];

    // Embaralhar as cartas
    cartas.sort(() => Math.random() - 0.5);

    cartas.forEach((imagem) => {
        const carta = document.createElement("button");
        carta.classList.add("memory-card");
        carta.textContent = "?";
        carta.dataset.image = imagem;

        carta.addEventListener("click", () => virarCarta(carta));

        jogo.appendChild(carta);
    });
}

function virarCarta(carta) {
    if (
        bloqueado ||
        carta === primeiraCarta ||
        carta.classList.contains("matched") ||
        carta.classList.contains("revealed")
    ) {
        return;
    }

    carta.classList.add("revealed");
    carta.innerHTML = `<img src="${carta.dataset.image}" alt="Obra de Banksy">`;

    if (!primeiraCarta) {
        primeiraCarta = carta;
        return;
    }

    segundaCarta = carta;
    jogadas++;

    document.getElementById("moves").textContent = jogadas;

    if (primeiraCarta.dataset.image === segundaCarta.dataset.image) {
        primeiraCarta.classList.add("matched");
        segundaCarta.classList.add("matched");

        primeiraCarta = null;
        segundaCarta = null;

        pares++;
        document.getElementById("pairs").textContent = pares;

        if (pares === 6) {
            document.getElementById("game-message").textContent =
                "Parabéns! Você encontrou todas as obras!";
        }
    } else {
        bloqueado = true;

        setTimeout(() => {
            primeiraCarta.textContent = "?";
            segundaCarta.textContent = "?";

            primeiraCarta.classList.remove("revealed");
            segundaCarta.classList.remove("revealed");

            primeiraCarta = null;
            segundaCarta = null;
            bloqueado = false;
        }, 1000);
    }
}

// Quiz
function responder(botao, correto) {
    const resultado = document.getElementById("quiz-result");

    if (!resultado) return;

    const botoes = document.querySelectorAll(".quiz-option");

    botoes.forEach((b) => {
        b.disabled = true;
    });

    if (correto) {
        resultado.textContent = "Correto! Banksy utiliza frequentemente a técnica do estêncil.";
        resultado.style.color = "#70c989";
    } else {
        resultado.textContent = "Não foi dessa vez! A resposta correta é estêncil.";
        resultado.style.color = "#e63232";
    }
}

// Inicia o jogo somente quando a página de jogos é aberta
document.addEventListener("DOMContentLoaded", iniciarJogo);
