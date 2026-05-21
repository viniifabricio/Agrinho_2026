/* ==========================================================================
   1. SISTEMA DO QUIZ INTERATIVO
   ========================================================================== */
const bancoPerguntas = [
    {
        pergunta: "Como o monitoramento do vento pelo EcoRadar ajuda diretamente a preservar o ecossistema local?",
        opcoes: [
            "Indicando a direção do vento apenas para o conforto dos operadores de trator na lavoura.",
            "Alertando o produtor sobre ventos fortes para evitar o efeito da deriva, protegendo abelhas e rios próximos."
        ],
        correta: 1
    },
    {
        pergunta: "Por que a agricultura inteligente desliga os sistemas de irrigação automáticos quando o radar acusa chuva verde?",
        opcoes: [
            "Para economizar água doce e energia elétrica, aproveitando de forma natural a água fornecida pela chuva.",
            "Porque as plantas não conseguem absorver água artificial e água da chuva ao mesmo tempo."
        ],
        correta: 0
    },
    {
        pergunta: "Qual o maior objetivo ecológico defendido pelo tema 'Agro forte, futuro sustentável' no projeto?",
        opcoes: [
            "Provar que a tecnologia serve apenas para aumentar os lucros financeiros das grandes propriedades rurais.",
            "Mostrar que é possível expandir a produção de alimentos mantendo o equilíbrio ecológico e a preservação ambientas."
        ],
        correta: 1
    },
    {
        pergunta: "O que acontece com os defensivos agrícolas quando aplicados sob condições severas indicadas em vermelho no radar?",
        opcoes: [
            "São lavados pela tempestade, gerando prejuízo financeiro e escoando diretamente para os lençóis freáticos.",
            "Eles penetram mais rápido no solo devido à força das gotas de chuva intensa."
        ],
        correta: 0
    }
];

let indiceAtual = 0;

function carregarPergunta() {
    const dadosPergunta = bancoPerguntas[indiceAtual];
    document.getElementById("status-pergunta").innerText = `Pergunta ${indiceAtual + 1} de ${bancoPerguntas.length}`;
    document.getElementById("pergunta-quiz").innerText = dadosPergunta.pergunta;
    
    const btnA = document.getElementById("btn-opcao-a");
    const btnB = document.getElementById("btn-opcao-b");
    
    btnA.innerText = `A) ${dadosPergunta.opcoes[0]}`;
    btnB.innerText = `B) ${dadosPergunta.opcoes[1]}`;
    
    btnA.disabled = false;
    btnB.disabled = false;
    
    document.getElementById("resultado-quiz").innerText = "";
    document.getElementById("btn-proxima").style.display = "none";
}

function verificarResposta(opcaoSelecionada) {
    const dadosPergunta = bancoPerguntas[indiceAtual];
    const elementResultado = document.getElementById("resultado-quiz");
    
    document.getElementById("btn-opcao-a").disabled = true;
    document.getElementById("btn-opcao-b").disabled = true;
    
    let feedbackTexto = "";
    if (opcaoSelecionada === dadosPergunta.correta) {
        feedbackTexto = "Resposta Correta! Excelente consciência ecológica.";
        elementResultado.innerText = `✨ ${feedbackTexto}`;
        elementResultado.style.color = "#27ae60";
    } else {
        feedbackTexto = "Resposta Incorreta. Lembre-se do foco na sustentabilidade ambiental!";
        elementResultado.innerText = `❌ ${feedbackTexto}`;
        elementResultado.style.color = "#e74c3c";
    }
    
    if (vozLigada) {
        falarTexto(feedbackTexto);
    }
    
    document.getElementById("btn-proxima").style.display = "inline-block";
}

function proximaPergunta() {
    indiceAtual++;
    if (indiceAtual < bancoPerguntas.length) {
        carregarPergunta();
        if(vozLigada) {
            setTimeout(() => { falarTexto(document.getElementById("pergunta-quiz").innerText); }, 500);
        }
    } else {
        const fimTexto = "Quiz Concluído! Parabéns! Você completou a trilha de conhecimento.";
        document.getElementById("status-pergunta").innerText = "Quiz Concluído! 🎉";
        document.getElementById("pergunta-quiz").innerText = "Parabéns! Você completou a trilha de conhecimento técnico sobre agricultura sustentável.";
        document.getElementById("btn-opcao-a").style.display = "none";
        document.getElementById("btn-opcao-b").style.display = "none";
        document.getElementById("resultado-quiz").innerText = "";
        document.getElementById("btn-proxima").style.display = "none";
        if(vozLigada) { falarTexto(fimTexto); }
    }
}

/* ==========================================================================
   2. SISTEMA DE SIMULAÇÃO CLIMÁTICA
   ========================================================================== */
function simularClima(velocidadeVento, proximidadeChuva) {
    const luzPulverizacao = document.getElementById("luz-pulverizacao");
    const textoPulverizacao = document.getElementById("texto-pulverizacao");
    const luzIrrigacao = document.getElementById("luz-irrigacao");
    const textoIrrigacao = document.getElementById("texto-irrigacao");

    luzPulverizacao.className = "status-luz";
    if (velocidadeVento > 20) {
        luzPulverizacao.classList.add("vermelho-ativo");
        textoPulverizacao.innerText = `Risco Alto (${velocidadeVento} km/h). Pulverização SUSPENSA para evitar a contaminação de rios.`;
    } else {
        luzPulverizacao.classList.add("verde-ativo");
        textoPulverizacao.innerText = `Seguro (${velocidadeVento} km/h). Vento ideal para aplicação precisa dos insumos.`;
    }

    luzIrrigacao.className = "status-luz";
    if (proximidadeChuva > 70) {
        luzIrrigacao.classList.add("vermelho-ativo");
        textoIrrigacao.innerText = `Chuva Iminente (${proximidadeChuva}%). Bombas DESLIGADAS para poupar recursos hídricos.`;
    } else {
        luzIrrigacao.classList.add("verde-ativo");
        textoIrrigacao.innerText = `Tempo Seco (${proximidadeChuva}%). Irrigação LIBERADA para a saúde do plantio.`;
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
   4. LEITOR DE TELA ROBUSTO (FALA TODO O CONTEÚDO)
   ========================================================================= */
let vozLigada = false;
const sintetizador = window.speechSynthesis;

function toggleLeituraVoz() {
    const btnVoz = document.getElementById("btn-voz");
    vozLigada = !vozLigada;

    if (vozLigada) {
        btnVoz.classList.add("btn-ativo");
        btnVoz.innerText = "🛑 Parar";
        falarTexto("Leitor integrado ativado. Passe o mouse sobre as seções ou cartões para escutar o conteúdo completo.");
        adicionarEventosLeituraCompleta();
    } else {
        btnVoz.classList.remove("btn-ativo");
        btnVoz.innerText = "🔊 Ouvir Site";
        sintetizador.cancel();
    }
}

function falarTexto(texto) {
    if (!vozLigada) return;
    sintetizador.cancel(); 
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = 1.1; 
    sintetizador.speak(fala);
}

// AJUSTE: Mapeamento completo para ler os parágrafos internos e textos dos cards
function adicionarEventosLeituraCompleta() {
    const elementos = document.querySelectorAll('.site-section, .radar-section, .ferramentas-section, .conclusao-section, .flash-card, .card');
    
    elementos.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (vozLigada) {
                // Se possuir aria-label detalhado (como nos flash-cards), lê ele. Senão, lê o texto interno completo.
                let textoParaFalar = el.getAttribute('aria-label') || el.innerText;
                falarTexto(textoParaFalar);
            }
        });
    });
}

// Função de inicialização chamada pelo HTML externo
function inicializarQuizEPainel() {
    carregarPergunta();
    simularClima(12, 15);
}