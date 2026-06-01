// Elementos do DOM
const quantidadeInput = document.getElementById('quantidade');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');
const mensagemDia = document.getElementById('mensagemDia');

// Função para calcular impacto
function calcularImpacto() {
    const quantidade = parseInt(quantidadeInput.value);

    if (isNaN(quantidade) || quantidade <= 0) {
        resultadoDiv.textContent = "Insira um número válido de árvores!";
        return;
    }

    const impactoCO2 = quantidade * 21; // kg de CO2/ano
    resultadoDiv.textContent = `Essas árvores podem capturar aproximadamente ${impactoCO2} kg de CO2 por ano. 🌱`;
}

// Mensagem dinâmica de acordo com o horário
function mensagemPorHorario() {
    const hora = new Date().getHours();
    if (hora < 12) {
        mensagemDia.textContent = "Bom dia! Que tal plantar esperança hoje?";
    } else if (hora < 18) {
        mensagemDia.textContent = "Boa tarde! Lembre-se de cuidar do nosso planeta.";
    } else {
        mensagemDia.textContent = "Boa noite! O futuro sustentável começa com suas ações hoje.";
    }
}

// Eventos
calcularBtn.addEventListener('click', calcularImpacto);
window.addEventListener('load', mensagemPorHorario);

// Animação de cores do fundo a cada 5 segundos
setInterval(() => {
    document.body.style.background = `linear-gradient(to bottom, #f0f9f0, #${Math.floor(Math.random()*16777215).toString(16)})`;
}, 5000);