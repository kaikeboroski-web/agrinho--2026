// Seleção de elementos
const form = document.getElementById('propertyForm');
const areaInput = document.getElementById('area');
const currentPreservedInput = document.getElementById('currentPreserved');

const resultDiv = document.getElementById('result');
const reserveResult = document.getElementById('reserveResult');
const appResult = document.getElementById('appResult');
const advice = document.getElementById('advice');

const visualizationDiv = document.getElementById('visualization');
const visualReserve = document.getElementById('visualReserve');
const visualApp = document.getElementById('visualApp');

// Função para calcular áreas
function calculateAreas(area, currentPreserved) {
    const reserveLegal = area * 0.2; // 20% da propriedade
    const app = area * 0.1; // 10% da propriedade

    const reserveToMaintain = Math.max(0, reserveLegal - currentPreserved);
    return { reserveLegal, app, reserveToMaintain };
}

// Função para exibir resultados
function displayResults(areas) {
    reserveResult.textContent = `Reserva Legal necessária: ${areas.reserveLegal.toFixed(2)} hectares`;
    appResult.textContent = `Área de Preservação Permanente (APP): ${areas.app.toFixed(2)} hectares`;

    if (areas.reserveToMaintain > 0) {
        advice.textContent = `Você precisa preservar mais ${areas.reserveToMaintain.toFixed(2)} hectares para cumprir a lei.`;
    } else {
        advice.textContent = `Parabéns! Sua propriedade já atende à Reserva Legal.`;
    }

    resultDiv.classList.remove('hidden');
}

// Função para atualizar visualização gráfica
function updateVisualization(areas, totalArea) {
    const reservePercent = (areas.reserveLegal / totalArea) * 100;
    const appPercent = (areas.app / totalArea) * 100;

    visualReserve.style.width = reservePercent + '%';
    visualApp.style.width = appPercent + '%';

    visualizationDiv.classList.remove('hidden');
}

// Evento do formulário
form.addEventListener('submit', function(e){
    e.preventDefault();

    const area = parseFloat(areaInput.value);
    const currentPreserved = parseFloat(currentPreservedInput.value);

    if(area < 0 || currentPreserved < 0){
        alert('Por favor, insira valores válidos.');
        return;
    }

    const areas = calculateAreas(area, currentPreserved);
    displayResults(areas);
    updateVisualization(areas, area);
});