// ==========================================================================
// 1. FUNCIONALIDADE INTERATIVA: SISTEMA DO QUIZ AVANÇADO (4 PERGUNTAS)
// ==========================================================================
const perguntasQuiz = [
    {
        texto: "Por que devemos evitar a pulverização quando o radar indica ventos acima de 20 km/h?",
        opcoes: [
            "Para evitar a deriva química, protegendo matas nativas, rios e polinizadores como as abelhas.",
            "Apenas para economizar o combustível do trator durante a aplicação no campo."
        ],
        correta: 0,
        explicacao: "🎉 Correto! O vento forte carrega o produto para longe da lavoura, gerando prejuízo financeiro e grave poluição ambiental externa."
    },
    {
        texto: "Qual o principal benefício ecológico de monitorar nuvens de chuva antes de acionar a irrigação?",
        opcoes: [
            "Acelerar o crescimento das folhas das plantas através do excesso de umidade acumulada.",
            "Evitar o desperdício de água doce do planeta e poupar energia elétrica desnecessária nas bombas d'água."
        ],
        correta: 1,
        explicacao: "🎉 Excelente! A agricultura consome a maior parte da água doce mundial; ligar os pivôs antes de chover gera um desperdício imenso de recursos."
    },
    {
        texto: "O que define a chamada 'Agricultura de Precisão' trazida no tema do Agrinho 2026?",
        opcoes: [
            "O uso de tecnologia (sensores, drones e dados) para aplicar recursos no local correto e na quantidade estritamente necessária.",
            "A técnica antiga de plantar a mesma cultura em grandes áreas sem nenhum tipo de monitoramento técnico."
        ],
        correta: 0,
        explicacao: "🎉 Perfeito! A tecnologia serve para trazer eficiência, produzindo mais utilizando muito menos recursos naturais."
    },
    {
        texto: "Como o monitoramento do radar meteorológico em tempo real ajuda diretamente o pequeno produtor?",
        opcoes: [
            "Permite prever tempestades severas a tempo de proteger o solo contra erosões e planejar colheitas seguras.",
            "Garante que nunca mais vai chover forte nas áreas onde o sistema estiver instalado."
        ],
        correta: 0,
        explicacao: "🎉 Muito bem! Os dados em tempo real dão poder de escolha ao produtor, minimizando as perdas causadas por eventos climáticos extremos."
    }
];

let indicePerguntaAtual = 0;

function carregarPergunta() {
    const q = perguntasQuiz[indicePerguntaAtual];
    
    // Atualiza os textos na tela
    document.getElementById('status-pergunta').innerText = `Pergunta ${indicePerguntaAtual + 1} de ${perguntasQuiz.length}`;
    document.getElementById('pergunta-quiz').innerText = q.texto;
    document.getElementById('btn-opcao-a').innerText = `A) ${q.opcoes[0]}`;
    document.getElementById('btn-opcao-b').innerText = `B) ${q.opcoes[1]}`;
    
    // Limpa feedbacks anteriores
    document.getElementById('resultado-quiz').innerText = "";
    document.getElementById('btn-proxima').style.display = "none";
    
    // Reativa os botões de resposta
    document.getElementById('btn-opcao-a').disabled = false;
    document.getElementById('btn-opcao-b').disabled = false;
}

function verificarResposta(opcaoSelecionada) {
    const q = perguntasQuiz[indicePerguntaAtual];
    const resultado = document.getElementById('resultado-quiz');
    
    // Desativa os botões para não clicar duas vezes
    document.getElementById('btn-opcao-a').disabled = true;
    document.getElementById('btn-opcao-b').disabled = true;
    
    if (opcaoSelecionada === q.correta) {
        resultado.innerText = q.explicacao;
        resultado.style.color = "#27ae60";
    } else {
        resultado.innerText = "❌ Resposta incorreta! Pense no equilíbrio entre a eficiência da produção e a segurança da natureza.";
        resultado.style.color = "#e74c3c";
    }
    
    // Mostra o botão para avançar
    document.getElementById('btn-proxima').style.display = "inline-block";
}

function proximaPergunta() {
    indicePerguntaAtual++;
    
    if (indicePerguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        // Fim do quiz
        document.getElementById('status-pergunta').innerText = "🏆 Quiz Concluído!";
        document.getElementById('pergunta-quiz').innerText = "Parabéns! Você demonstrar ser um verdadeiro especialista em Agro Sustentável e soluções digitais de Front-End!";
        document.getElementById('btn-opcao-a').style.display = "none";
        document.getElementById('btn-opcao-b').style.display = "none";
        document.getElementById('btn-proxima').style.display = "none";
        document.getElementById('resultado-quiz').innerText = "";
    }
}

// ==========================================================================
// 2. FUNCIONALIDADE INTERATIVA: SISTEMA DE PROCESSAMENTO CLIMÁTICO DO RADAR
// ==========================================================================
function simularClima(velocidadeVento, chanceChuva) {
    console.log(`Dados Climáticos Recebidos: Vento a ${velocidadeVento}km/h, Chuva em ${chanceChuva}%`);
    
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
    // Carrega a primeira pergunta do quiz automaticamente
    carregarPergunta();
    // Inicia o painel com parâmetros ótimos por padrão
    simularClima(12, 15);
});