/* ==========================================================================
   PROJETO DESENVOLVIDO PARA O CONCURSO AGRINHO 2026 - LOGICA DO FRONT-END
   ========================================================================= */

// --- BANCO DE DADOS LOCAL DO QUIZ ---
const perguntasQuiz = [
    {
        pergunta: "Por que não devemos pulverizar plantações com ventos muito fortes?",
        opcoes: [
            "A) Por causa do fenômeno da deriva, que desvia os produtos e contamina a natureza ao redor.",
            "B) Porque as gotas d'água congelam antes de tocar nas folhas da lavoura."
        ],
        correta: 0,
        explicacao: "Correto! O vento forte causa deriva, desperdiçando o produto e poluindo o meio ambiente."
    },
    {
        pergunta: "Qual o impacto ecológico de ligar sistemas de irrigação momentos antes de uma chuva forte?",
        opcoes: [
            "A) Ajuda a economizar energia elétrica nas bombas.",
            "B) Causa desperdício severo de água doce e gastos desnecessários de eletricidade."
        ],
        correta: 1,
        explicacao: "Excelente! Irrigar antes da chuva é desnecessário, já que a natureza fará o trabalho de graça."
    },
    {
        pergunta: "Qual a porcentagem aproximada de consumo de água doce mundial pela agricultura?",
        opcoes: [
            "A) Cerca de 70%, o que exige o uso de tecnologias inteligentes para evitar o esgotamento.",
            "B) Menos de 5%, pois a maior parte vem de águas industriais."
        ],
        correta: 0,
        explicacao: "Isso mesmo! O agro usa cerca de 70% da água doce, por isso a tecnologia de controle é vital."
    },
    {
        pergunta: "Qual o tema principal do Concurso Agrinho 2026?",
        opcoes: [
            "A) Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.",
            "B) Expansão urbana máxima e automação industrial sem controle."
        ],
        correta: 0,
        explicacao: "Perfeito! O foco é produzir com inteligência respeitando e conservando o ecossistema!"
    }
];

let indicePerguntaAtual = 0;
let acertosQuiz = 0; // CONTADOR DE ACERTOS (MELHORIA N° 1)
let vozAtiva = false;
let sinteseVoz = window.speechSynthesis;
let utteranceAtual = null;

/* ==========================================================================
   1. INICIALIZAÇÃO DO SISTEMA
   ========================================================================= */
function inicializarQuizEPainel() {
    renderizarPerguntaQuiz();
    simularClima(12, 15); // Configuração neutra inicial
}

/* ==========================================================================
   2. ACESSIBILIDADE - LEITURA DE VOZ (VERSÃO DEFINITIVA COM TEXTO ESTRUTURADO)
   ========================================================================= */
function toggleLeituraVoz() {
    const btnVoz = document.getElementById("btn-voz");
    
    if (!vozAtiva) {
        sinteseVoz.cancel(); // Para qualquer áudio residual travado no navegador
        vozAtiva = true;
        btnVoz.innerText = "🛑 Parar Leitura";
        btnVoz.classList.add("btn-ativo");
        
        // Texto explicativo e completo estruturado diretamente para o motor de voz
        let textoExplicativo = "Iniciando a leitura completa do site EcoRadar Agro. " +
            "Este projeto foi desenvolvido para o Concurso Agrinho 2026, na Categoria Front-End. " +
            "Identificação do desenvolvedor: Aluno Vinicius Montagna Fabricio. " +
            "Instituição de ensino: Colégio Estadual Cívico-Militar Stella Maris. " +
            "Município: Andirá, Paraná. " +
            
            "Sobre o projeto: O EcoRadar Agro é uma plataforma digital criada para auxiliar pequenos e grandes produtores rurais a tomarem decisões inteligentes e ecológicas no campo. O sistema une a tecnologia de ponta do monitoramento climático com práticas sustentáveis, garantindo um agro forte que protege o futuro do nosso planeta. " +
            
            "Na seção do Radar Meteorológico em Tempo Real, o sistema monitora o avanço das nuvens de chuva para o planejamento das ações no campo. A legenda explica as cores do radar: A cor verde indica chuva fraca, ideal para infiltração de água no solo. A cor amarela indica chuva moderada, exigindo cautela na colheita e transporte. A cor vermelha indica tempo severo e tempestades, alertando o produtor para proteger o solo contra a erosão. " +
            
            "No Espaço Informativo, apresentamos três conceitos centrais. Primeiro, sobre Tecnologia, o foco do Programa Agrinho 2026 é Agro Forte, Futuro Sustentável, unindo produção e responsabilidade social. Segundo, sobre Sustentabilidade, destaca-se o equilíbrio de recursos através da agricultura digital, drones e sensores inteligentes. Terceiro, sobre Inovação, o grande desafio do agronegócio é garantir a segurança alimentar aumentando a produtividade sem comprometer a biodiversidade local. " +
            
            "Na seção de Impactos Positivos do Agro Digital, a tabela demonstra benefícios práticos: decisões em tempo real para o produtor, alimentos mais saudáveis para as cidades e a proteção direta de rios e polinizadores contra a deriva química para o meio ambiente. " +
            
            "O site conta também com um Painel de Tomada de Decisão Sustentável. Este painel analisa o clima e emite alertas automáticos. Para a pulverização consciente, o sistema bloqueia a aplicação se o vento estiver acima de vinte quilômetros por hora para evitar a deriva química. Para a irrigação inteligente, o sistema desliga as bombas se detectar chuva iminente, economizando água doce e energia elétrica. " +
            
            "Concluindo o projeto, ressalta-se que o desenvolvimento do agronegócio precisa caminhar junto com a preservação ambiental. O tema Agro Forte, Futuro Sustentável prova que, com inovação, educação ambiental e responsabilidade social, é possível construir um campo muito mais produtivo, moderno e em perfeito equilíbrio com a natureza. " +
            
            "Fim da leitura do projeto EcoRadar Agro.";

        utteranceAtual = new SpeechSynthesisUtterance(textoExplicativo);
        utteranceAtual.lang = 'pt-BR';
        utteranceAtual.rate = 1.05; // Velocidade natural e confortável de audição
        
        // Evento executado quando o áudio termina naturalmente
        utteranceAtual.onend = function() {
            desativarBotaoVoz();
        };
        
        // Evento executado caso ocorra um erro de áudio no navegador
        utteranceAtual.onerror = function() {
            desativarBotaoVoz();
        };
        
        sinteseVoz.speak(utteranceAtual);
    } else {
        desativarBotaoVoz();
    }
}

function desativarBotaoVoz() {
    vozAtiva = false;
    sinteseVoz.cancel();
    const btnVoz = document.getElementById("btn-voz");
    if (btnVoz) {
        btnVoz.innerText = "🔊 Ouvir Site";
        btnVoz.classList.remove("btn-ativo");
    }
}
/* ==========================================================================
   3. ALTO CONTRASTE (CORRIGIDO)
   ========================================================================= */
function toggleContraste() {
    document.body.classList.toggle("alto-contraste");
    const btn = document.getElementById("btn-contraste");
    if (document.body.classList.contains("alto-contraste")) {
        btn.innerText = "☀️ Modo Normal";
    } else {
        btn.innerText = "🌓 Contraste";
    }
}

/* ==========================================================================
   4. SISTEMA DO QUIZ INTERATIVO COM CONTADOR (MELHORIA N° 1)
   ========================================================================= */
function renderizarPerguntaQuiz() {
    const statusTxt = document.getElementById("status-pergunta");
    const perguntaTxt = document.getElementById("pergunta-quiz");
    const btnA = document.getElementById("btn-opcao-a");
    const btnB = document.getElementById("btn-opcao-b");
    const resultadoTxt = document.getElementById("resultado-quiz");
    const btnProxima = document.getElementById("btn-proxima");

    resultadoTxt.innerText = "";
    resultadoTxt.style.color = "initial";
    btnProxima.style.display = "none";
    
    btnA.disabled = false;
    btnB.disabled = false;

    if (indicePerguntaAtual < perguntasQuiz.length) {
        const dados = perguntasQuiz[indicePerguntaAtual];
        statusTxt.innerText = `Pergunta ${indicePerguntaAtual + 1} de ${perguntasQuiz.length}`;
        perguntaTxt.innerText = dados.pergunta;
        btnA.innerText = dados.opcoes[0];
        btnB.innerText = dados.opcoes[1];
    } else {
        // TELA FINAL COM CONTADOR ATUALIZADO (MELHORIA N° 1)
        statusTxt.innerText = "✨ Quiz Concluído!";
        perguntaTxt.innerText = `Você finalizou o teste ecológico!`;
        
        let feedbackAcertos = "";
        if(acertosQuiz === perguntasQuiz.length) {
            feedbackAcertos = "🏆 Excelente! Você possui consciência ecológica máxima!";
        } else if(acertosQuiz >= 2) {
            feedbackAcertos = "🌱 Muito bom! Você conhece bastante sobre o campo.";
        } else {
            feedbackAcertos = "📚 Vale a pena ler o Espaço Informativo para aprender mais.";
        }
        
        resultadoTxt.innerHTML = `<span style="font-size:1.2rem; display:block; margin-bottom:8px;">Você acertou <strong>${acertosQuiz} de ${perguntasQuiz.length}</strong> perguntas.</span> ${feedbackAcertos}`;
        resultadoTxt.style.color = "#2e7d32";
        
        btnA.style.display = "none";
        btnB.style.display = "none";
    }
}

function verificarResposta(opcaoSelecionada) {
    const dados = perguntasQuiz[indicePerguntaAtual];
    const resultadoTxt = document.getElementById("resultado-quiz");
    const btnA = document.getElementById("btn-opcao-a");
    const btnB = document.getElementById("btn-opcao-b");
    const btnProxima = document.getElementById("btn-proxima");

    btnA.disabled = true;
    btnB.disabled = true;

    if (opcaoSelecionada === dados.correta) {
        acertosQuiz++; // SOMA O ACERTO
        resultadoTxt.innerText = "✅ " + dados.explicacao;
        resultadoTxt.style.color = "#27ae60";
    } else {
        resultadoTxt.innerText = "❌ Resposta incorreta. O correto seria a alternativa que evita danos ecológicos.";
        resultadoTxt.style.color = "#e74c3c";
    }
    
    btnProxima.style.display = "inline-block";
}

function proximaPergunta() {
    indicePerguntaAtual++;
    renderizarPerguntaQuiz();
}

/* ==========================================================================
   5. LOGICA COMPUTACIONAL DO PAINEL DE DECISÃO SUSTENTÁVEL
   ========================================================================= */
function simularClima(velocidadeVento, umidadeAr) {
    const luzPulverizacao = document.getElementById("luz-pulverizacao");
    const textoPulverizacao = document.getElementById("texto-pulverizacao");
    const luzIrrigacao = document.getElementById("luz-irrigacao");
    const textoIrrigacao = document.getElementById("texto-irrigacao");

    // Lógica para Pulverização (Baseado na velocidade do vento)
    if (velocidadeVento > 20) {
        luzPulverizacao.className = "status-luz vermelho-ativo";
        textoPulverizacao.innerHTML = `<strong>Bloqueado:</strong> Vento a ${velocidadeVento} km/h. Risco extremo de deriva química!`;
    } else if (velocidadeVento < 5) {
        luzPulverizacao.className = "status-luz vermelho-ativo";
        textoPulverizacao.innerHTML = `<strong>Aviso:</strong> Vento muito fraco (${velocidadeVento} km/h). Risco de inversão térmica.`;
    } else {
        luzPulverizacao.className = "status-luz verde-ativo";
        textoPulverizacao.innerHTML = `<strong>Liberado:</strong> Vento a ${velocidadeVento} km/h. Condição ideal para aplicação segura.`;
    }

    // Lógica para Irrigação Inteligente (Baseado na umidade/proximidade de chuva)
    if (umidadeAr > 80) {
        luzIrrigacao.className = "status-luz vermelho-ativo";
        textoIrrigacao.innerHTML = `<strong>Desligar:</strong> Umidade em ${umidadeAr}%. Chuva iminente detetada via satélite. Economize água!`;
    } else if (umidadeAr < 30) {
        luzIrrigacao.className = "status-luz verde-ativo";
        textoIrrigacao.innerHTML = `<strong>Ativar Urgente:</strong> Solo seco (${umidadeAr}%). Irrigação necessária para o crescimento.`;
    } else {
        luzIrrigacao.className = "status-luz verde-ativo";
        textoIrrigacao.innerHTML = `<strong>Modo Econômico:</strong> Umidade estável em ${umidadeAr}%. Monitorando as próximas nuvens.`;
    }
}