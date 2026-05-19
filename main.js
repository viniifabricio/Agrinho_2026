// ==========================================================================
// 1. FUNCIONALIDADE INTERATIVA: SISTEMA DO QUIZ SUSTENTÁVEL
// ==========================================================================
function responderQuiz(comCorreto) {
    const resultado = document.getElementById('resultado-quiz');
    if (comCorreto) {
        resultado.innerText = "🎉 Resposta Correta! Evitar a deriva química economiza produto, preserva as abelhas e impede a contaminação de leitos de rios.";
        resultado.style.color = "#27ae60";
    } else {
        resultado.innerText = "❌ Tente novamente! Pense no efeito físico que o vento causa nas gotas de pulverização.";
        resultado.style.color = "#e74c3c";
    }
}

// ==========================================================================
// 2. FUNCIONALIDADE INTERATIVA: SISTEMA DE PROCESSAMENTO CLIMÁTICO DO RADAR
// ==========================================================================
function simularClima(velocidadeVento, chanceChuva) {
    console.log(`Dados Climáticos Recebidos: Vento a ${velocidadeVento}km/h, Chuva em ${chanceChuva}%`);
    
    // CAPTURA DOS ELEMENTOS DO CARD 1 (PULVERIZAÇÃO)
    const luzPulverizacao = document.getElementById('luz-pulverizacao');
    const textoPulverizacao = document.getElementById('texto-pulverizacao');
    
    if (luzPulverizacao && textoPulverizacao) {
        if (velocidadeVento > 20) {
            luzPulverizacao.className = "status-luz vermelho-ativo";
            textoPulverizacao.innerText = `Vento forte a ${velocidadeVento} km/h. Risco alto de deriva! Evite aplicar defensivos biológicos agora.`;
        } else {
            luzPulverizacao.className = "status-luz verde-ativo";
            textoPulverizacao.innerText = `Vento estável a ${velocidadeVento} km/h. Condições operacionais perfeitas e ecologicamente seguras.`;
        }
    }

    // CAPTURA DOS ELEMENTOS DO CARD 2 (IRRIGAÇÃO)
    const luzIrrigacao = document.getElementById('luz-irrigacao');
    const textoIrrigacao = document.getElementById('texto-irrigacao');
    
    if (luzIrrigacao && textoIrrigacao) {
        if (chanceChuva > 70) {
            luzIrrigacao.className = "status-luz vermelho-ativo"; 
            textoIrrigacao.innerText = `Frente de chuva iminente (${chanceChuva}%). Desligue os pivôs eletrônicos para poupar água doce e energia.`;
        } else {
            luzIrrigacao.className = "status-luz verde-ativo";
            textoIrrigacao.innerText = `Baixa probabilidade de chuva (${chanceChuva}%). Sistemas de gotejamento de precisão autorizados para operação.`;
        }
    }
}

// Inicialização automática segura assim que o DOM carregar nativamente
document.addEventListener("DOMContentLoaded", function() {
    // Inicia o painel com parâmetros ótimos por padrão
    simularClima(12, 15);
});