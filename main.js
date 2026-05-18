// 1. FUNCIONALIDADE: SISTEMA DO QUIZ INTERATIVO
function responderQuiz(comCorreto) {
    const resultado = document.getElementById('resultado-quiz');
    if (comCorreto) {
        resultado.innerText = "🎉 Resposta Correta! Evitar a deriva economiza produto e protege o ecossistema.";
        resultado.style.color = "#27ae60";
    } else {
        resultado.innerText = "❌ Tente novamente! Lembre-se do impacto do vento nas matas ciliares.";
        resultado.style.color = "#e74c3c";
    }
}

// Função auxiliar para o botão incorreto do quiz
function callQuizErrado() {
    responderQuiz(false);
}

// 2. FUNCIONALIDADE: CONTROLE DO PAINEL DE TOMADA DE DECISÃO
function simularClima(velocidadeVento, chanceChuva) {
    console.log(`Lógica processada: Vento ${velocidadeVento}km/h, Chuva ${chanceChuva}%`);
    
    // CAPTURA DOS ELEMENTOS DO CARD 1 (PULVERIZAÇÃO)
    const luzPulverizacao = document.getElementById('luz-pulverizacao');
    const textoPulverizacao = document.getElementById('texto-pulverizacao');
    
    if (luzPulverizacao && textoPulverizacao) {
        if (velocidadeVento > 20) {
            luzPulverizacao.className = "status-luz vermelho-ativo";
            textoPulverizacao.innerText = `Vento forte a ${velocidadeVento} km/h. Risco alto de deriva! Evite pulverizar agora.`;
        } else {
            luzPulverizacao.className = "status-luz verde-ativo";
            textoPulverizacao.innerText = `Vento estável a ${velocidadeVento} km/h. Condições adequadas de aplicação.`;
        }
    }

    // CAPTURA DOS ELEMENTOS DO CARD 2 (IRRIGAÇÃO)
    const luzIrrigacao = document.getElementById('luz-irrigacao');
    const textoIrrigacao = document.getElementById('texto-irrigacao');
    
    if (luzIrrigacao && textoIrrigacao) {
        if (chanceChuva > 70) {
            luzIrrigacao.className = "status-luz vermelho-ativo"; 
            textoIrrigacao.innerText = `Previsão de chuva em ${chanceChuva}%. Desligue os sistemas e poupe água.`;
        } else {
            luzIrrigacao.className = "status-luz verde-ativo";
            textoIrrigacao.innerText = `Baixa probabilidade de chuva (${chanceChuva}%). Irrigação operando em gotejamento.`;
        }
    }
}

// Inicialização segura quando o documento carregar nativamente
document.addEventListener("DOMContentLoaded", function() {
    // Carrega o simulador com valores ideais estáveis na abertura da página
    simularClima(11, 15);
});