// Simulação de dados coletados do Radar/Previsão do Tempo
const dadosClimaticosAtuais = {
    velocidadeVento: 25, // em km/h
    chanceDeChuvaAmanha: 85, // em porcentagem
    umidadeSolo: 40 // em porcentagem
};

function rodarPainelSustentavel() {
    // 1. Lógica do Alerta de Pulverização
    const luz = document.getElementById('luz-pulverizacao');
    const textoPulv = document.getElementById('texto-pulverizacao');

    if (dadosClimaticosAtuais.velocidadeVento > 20) {
        luz.className = "status-luz vermelho";
        textoPulv.innerText = `Vento a ${dadosClimaticosAtuais.velocidadeVento} km/h. NÃO PULVERIZE! Risco alto de desvio do produto para áreas de preservação.`;
    } else if (dadosClimaticosAtuais.velocidadeVento > 10) {
        luz.className = "status-luz amarelo";
        textoPulv.innerText = `Vento a ${dadosClimaticosAtuais.velocidadeVento} km/h. Atenção ao aplicar.`;
    } else {
        luz.className = "status-luz verde";
        textoPulv.innerText = "Condições ideais de vento para pulverização segura.";
    }

    // 2. Lógica da Irrigação Inteligente
    const textoIrrigacao = document.getElementById('texto-irrigacao');
    
    if (dadosClimaticosAtuais.chanceDeChuvaAmanha > 70) {
        textoIrrigacao.innerText = `Chuva detectada no radar (${dadosClimaticosAtuais.chanceDeChuvaAmanha}% de chance amanhã). DESLIGUE os irrigadores hoje e economize água!`;
    } else {
        textoIrrigacao.innerText = "Sem previsão de chuva significativa. Mantenha o cronograma normal de irrigação.";
    }
}

// Executa a função ao carregar a página
window.onload = rodarPainelSustentavel;