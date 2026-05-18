// O Cérebro do Front-End: Regras de Sustentabilidade baseadas no Clima
function simularClima(velocidadeVento, chanceChuva) {
    console.log("Simulando: Vento=" + velocidadeVento + "km/h, Chuva=" + chanceChuva + "%");
    
    // ELEMENTS - CARD 1: PULVERIZAÇÃO
    const luzPulverizacao = document.getElementById('luz-pulverizacao');
    const textoPulverizacao = document.getElementById('texto-pulverizacao');
    
    // REGRA SUSTENTÁVEL DA PULVERIZAÇÃO
    if (luzPulverizacao && textoPulverizacao) {
        if (velocidadeVento > 20) {
            luzPulverizacao.className = "status-luz vermelho-ativo";
            textoPulverizacao.innerText = `Vento forte a ${velocidadeVento} km/h. NÃO PULVERIZE! Risco extremo de desviar o produto para rios e áreas de preservação.`;
            textoPulverizacao.style.color = "#c0392b";
        } else if (velocidadeVento >= 10 && velocidadeVento <= 20) {
            luzPulverizacao.className = "status-luz amarelo-ativo";
            textoPulverizacao.innerText = `Vento moderado a ${velocidadeVento} km/h. Atenção na aplicação se houver florestas e polinizadores por perto.`;
            textoPulverizacao.style.color = "#d35400";
        } else {
            luzPulverizacao.className = "status-luz verde-ativo";
            textoPulverizacao.innerText = `Vento seguro a ${velocidadeVento} km/h. Condições atmosféricas ideais para uma pulverização segura.`;
            textoPulverizacao.style.color = "#27ae60";
        }
    }

    // ELEMENTS - CARD 2: IRRIGAÇÃO
    const luzIrrigacao = document.getElementById('luz-irrigacao');
    const textoIrrigacao = document.getElementById('texto-irrigacao');
    
    // REGRA SUSTENTÁVEL DA IRRIGAÇÃO
    if (luzIrrigacao && textoIrrigacao) {
        if (chanceChuva > 70) {
            luzIrrigacao.className = "status-luz vermelho-ativo"; 
            textoIrrigacao.innerText = `Radar acusa ${chanceChuva}% de chuva vindo aí. PAUSE A IRRIGAÇÃO! Permita que a água da natureza trabalhe e economize água e energia.`;
            textoIrrigacao.style.color = "#c0392b";
        } else if (chanceChuva >= 30 && chanceChuva <= 70) {
            luzIrrigacao.className = "status-luz amarelo-ativo";
            textoIrrigacao.innerText = `Instabilidade de ${chanceChuva}% detectada no radar. Reduza a vazão das bombas e economize recursos hídricos.`;
            textoIrrigacao.style.color = "#d35400";
        } else {
            luzIrrigacao.className = "status-luz verde-ativo"; 
            textoIrrigacao.innerText = `Tempo seco (${chanceChuva}% de chuva). Mantenha o cronograma. Dê preferência ao gotejamento para máxima eficiência.`;
            textoIrrigacao.style.color = "#27ae60";
        }
    }
}

// Garante o carregamento inicial no ambiente virtual do GitHub
document.addEventListener("DOMContentLoaded", function() {
    simularClima(12, 15);
});