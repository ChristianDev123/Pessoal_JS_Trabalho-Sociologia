//============================= DADOS ======================================
var temas = [
    "Homofobia",
    "Racismo Anti-Negro",
    "Transfobia",
    "Racismo contra Asiáticos",
    "Discriminação contra pessoas portadoras de deficiência",
    "Assédio Sexual",
    "Racismo anti-Indígena",
    "Anorexia e Bulimia",
    "Gordofobia"
]
var questao = {
    pergunta: "Selecione um tema para conhecer:",
    tema: temas,
}
var textos = [
    [],
    [// Racismo contra Negro
            `
            Me sinto de luto,
            de luto pela sociedade,
            como pode existir tantos seres hipócritas em apenas um lugar?
            me dá nojo saber a opinião de alguns, e me alegra saber que por mais preconceituoso que o mundo esteja, existem pessoas sensatas,
            eu me sinto de luto,
            de luto pelo preto que morreu semana passada,
            pela mãe que chorou a madrugada,
            pelo sentimento de ter sua alma levada,
            eu me sinto de,  luto
            pelas mulheres  e pelos feminicidios,
            pelos depressivos e o consequente suicídio,
            pela vida que não teve início.
            O povo grita "OQ ELES QUEREM, E PORQUE?"
            não querem nada do governador,
            eles só querem matar a sua dor,
            eles precisam de um pouco de amor e
            Da sociedade eles pedem clamor!!!
            eles querem só uma coisa, que a sociedade não se dispõe a agregar, só precisamos de uma vírgula, para poder continuar.
            Agora vou te contar uma história não muito legal
            sobre um negro, e um policial
            que "não pensou" que 80 tiros fosse o ideal
            para tornar aquela cena fatal
            EU ESTOU DE LUTO
            e isso ninguém tem que entender
            até por que em pleno século XXI, me aponte uma pessoa que saiba exatamente, oq temos que fazer...
            `,
            `
                Minha História é feita em linhas
            
            Linhas criadas por Oxalá
            A ele me ajoelho e bato cabeça
            Epa babá!
            Me deito no chão
            Para aqueles que me erguem na vida
            Obrigado Iasã
            Pelos ventos de sabedoria.
            Minha casa é onde vibra os sons de tambor,
            Vem do reino de Oxalá 
            Onde há paz e amor.
            Como Ser humano
            Sei que nunca estou só,
            Com quem converso todo dia?
            Preta velha, maria redonda, minha vó.
            Filho de Axé do Saravá
            Exu é a prova disso, exu é Mojubá
            Sou guiado pelas flechas de Oxossi,
            Meu pai é caçador
            Na guerra, como filho de Ogum
            Com a doença tenho meu pai Omulu
            Que me trouxe Atotô.
            Oxum, minha alma iluminou
            Com seu olhar cor do sol, minha alma ela guiou
            o caminho se baseia na fé
            com seu próprio arco-íris, construiu o céu
            O principe Oxumpré
            ao procurar justiça, se agaixe e diz cão
            Siga o caminho do trovão
            E veja a força de Xango
        `,
            `
                Sou Brasieleiro
            Mas não vou matar nem roubar
            Vou me esforçar pelos que estão lá embaixo
            E conquistar meu lugar,
            Realmente farei
            O sistema não teme o pobre que passa fome
            Teme o pobre que sabe pensar,
            Sua raiz é de um país
            Que não veio de uma só
            É tanta falta de conhecimento 
            As vezes dá um pouco de dó.
            Os que estão em Brasília me lembram muito Hitler
            Carregam tradições escravocratas
            E bão aguentam ver o preto líder.
            Disse Chico "Hoje quem manda,
            Falou tá falado, não tem discussão!",
            A única diferença é que a gente 
            Não anda falando de lado
            E olhando pro chão;
            Falando em chão, meus pés só andam na favela
            É tanta humilhação do sistema
            Que talvez eu nunca saia dela.
            Fui Feito com a espada de Agum eo punho de Xango
            A trajetória dessa vida é triste,
            Mas eles me ensinaram a acreditar no amor.
            Ser Preto no Brasil
            É não confiar na própria sombra
            Não ande rápido! Que o branco de farda te aponta
            Nós crescemos tentando fugir das estatísticas
            Como vou passar dos 18 sem ser morto pela polícia?
            `,
            `
                Malcom X eu não tô bem com isso
            Continuam nos matando
            E ninguém sabe o motivo.
            Eu queria ser gigante
            E mudar nossos caminhos,
            Mas aquelas coisas...
            Pobre quer sofrer sozinho.
            Quando precisamos de atitude
            Pode-se mudar isso,
            Mas é necessário virtude.
            Pessias de barriga cheia e mente vazia
            Seres com o estômago vazio e a mente cheia de sabedoria
            Foram muitos
            E vão ter muito mais
            Espero que o mundo um dia tenha paz.
            `,
    
    ],
    [],
    [],
    [],
    [// Assédio Sexual
        `Queria que minhas lágrimas fossem frias como o gelo, para que assim fossem tão incômodas quanto a frescura que vive aqui, no  lugar preto e fundo... Que não parece frio, mas vazio. Não aponto o julgamento, ao seu passado eu te dou a sua ignorância, mas no lugar preto e vazio não tem você... Só eu.<br> 
        Penso na lágrima que não é fria, no motivo insistente da vontade que não vem. Será que sou eu? Pq aqui? No lugar preto e vazio?<br> 
        Não sinto, não vejo, não sei, mas disseram ser frescura, então estamos aqui... Eu e a senhora frescura, no lugar preto e vazio, sem você ou eles... Só eu e ela, a senhora frescura.`
    ],
    [],
    [//Bulimia e Anorexia (Padrões Estéticos)
        `Essa mulher do desenho se chama Cibele<br>
        Ela é uma pessoa extremamente vaidosa!<br><br>
        Pôs silicones, pintou os cabelos de louro, usa lentes azuis e afinou a cintura.<br>
        Tudo para se encaixar em padrões impostos pela sociedade.<br><br>
        Será que, depois de ter feito tudo que lhe tinha vontade, Cibele está feliz?<br> 
        Seus problemas teriam acabados?<br><br>
        Que belo sorriso, Cibele!<br>
        O que será que por trás dele se esconde?<br><br>
        — Estou bem! Veja só o meu sorriso!!!<br>
        Afinal, não há nada melhor do que boas mentiras!`,
        `       "Boas" Mentiras <br><br>
        Ela é perfeita por natureza<br>
        Oh, mundo doente que gira em torno de padrões<br><br>
        Com tantos problemas, ela se esconde por trás daqueles disfarces<br>
        Sem sua máscara, ela nunca existiu e nunca existirá<br><br>
        Apenas um personagem sorridente que engana a todos<br>
        Seu lindo e magestoso sorriso, oculta o que realmente se passa<br><br>
        Tire seus disfarces, moça!<br>
        Conte-me, o que há?<br>
        — Não, não há nada! Não quero preocupar ninguém.<br><br>
        Afinal, não há nada melhor do que "boas" mentiras!<br><br>
        Aliás, não há defeitos quando está fingindo!<br><br>
        Perfeita por natureza<br>
        Aliás, malditos padrões!<br>
        Malditas circunstâncias, que  nos obrigam a usar máscaras.<br><br>
        "Mas tudo vai ficar bem, e essas feridas vão se curar"`,
    ],
    [],
]
var autoTxt = [
    [],
    [//Racismo Anti-Negro
        "Giovanna Marmith 1ºE",
        "Pedro Lucas 2ºB",
        "Pedro Lucas 2ºB",
        "Pedro Lucas 2ºB",
    ],
    [],
    [],
    [],
    [// Assédio Sexual
        "Andressa 3ºB"
    ],
    [],
    [//Bulimia e Anorexia(Padrões Estéticos)
        "Guilherme Kanhwald_1E",
        "Guilherme Kanhwald 1ºE",
    ],
    []
]
var imagens = [
    [// Homofobia
        "Imagens/imagem_Homofobia_Ana Luiza_1E.jpeg",
        "Imagens/imagem_Homofobia_Maria Eduarda Tesso_1E.jpeg",
    ],
    [//Racismo Anti-Negro
        "Imagens/Imagem2_Lucca_3C_Racismo-Anti-Negro.jpeg",
        "Imagens/imagem_Racismo-Anti-Negro_Maria Luiza_1Ejpeg.jpeg",
        "Imagens/imagem_Racismo-Anti-Negro_Maria_1E.jpeg",
        "Imagens/imagem_Racismo-Anti-Negro_Moacir_2B_img2.jpeg",
        "Imagens/imagem_Racismo-Anti-Negro_Moacir_2B.jpeg"
    ],
    [// Transfobia
        "Imagens/imagem_Sentimentos_Fabricio.jpeg",
        "Imagens/imagem_Transfobia_Ana Luiza_1E.jpeg",
        "Imagens/imagem_Transfobia_Andresa_1E.jpeg",
        "Imagens/imgem_Transfobia_Pablo_2B.jpeg",
    ],
    [// Racismo contra Asiáticos
        "Imagens/imagem_Isolamento_Fabricio_3B_Racismo-Asiatico.jpeg",
        "Imagens/imagem_Pablo_2B_Racismo_Anti-Asiatico.jpeg",
        "Imagens/imagem_Pablo_2B_Racismo_Anti_Asiatico_img2.jpeg",
        "Imagens/imagem_Racismo-Anti-Asiatico_Moacir_2B.jpeg",
        "Imagens/imagem_Racismo-Anti-Asiatico_Andressa_1E.jpeg",
    ],
    [// Discriminação PCD
        "Imagens/Imagem_Andressa_PCD_1E.jpeg",
        "Imagens/Imagem_desciminacao-PCD_Andressa_1E.jpeg",
    ],
    [// Assédio Sexual
        "Imagens/imagem_Lucca_3C_AssedioSex.jpeg",
    ],
    [// Racismo contra indígena
        "Imagens/imagem_Racismo_Anti-Indigena_Pablo_2B.jpeg",
        "Imagens/imagem_Dor_Fabricio_Racismo-Anti-Indigena.jpeg",

    ],
    [// Bulimia e Anorexia (Padrões Estéticos)
        "Imagens/imagem_Josias_2D_Anorexia_Bulimia.jpeg",
        "Imagens/imagem_Padroes Esteticos_Guilherme Kanhwald.jpeg",
        "Imagens/imagem_Fabrício_3B_Pressao-Estetica.jpeg",

    ],
    [// Gordofobia
        "Imagens/imagem_Gordofobia_Andressa_1ºE.jpeg"
    ]
]
var autoImg = [
    [// Homofobia
        "Ana Luiza 1ºE",
        "Maria Eduarda Tesso 1ºE",
    ],
    [//Racismo Anti-Negro
        "Lucca 3ºC",
        "Maria Luiza 1ºE",
        "Maria 1ºE",
        "Moacir 2ºB",
        "Moacir 2ºB",
    ],
    [// Transfobia
        "Fabrício 3ºB",
        "Ana Luiza 1ºE",
        "Andressa 1ºE",
        "Pablo 2ºB",
    ],
    [// Racismo contra Asiáticos
        "Fabricio 3ºB",
        "Pablo 2ºB",
        "Pablo 2ºB",
        "Moacir 2ºB",
        "Andressa 1ºE",
    ],
    [// Discriminação PCD
        "Andressa 1ºE",
        "Andressa 1ºE"
    ],
    [//  Assedio Sexual
        "Lucca 3ºC",
    ],
    [// Racismo contra indígenas
        "Pablo 2ºB",
        "Fabrício 3ºB"
    ],
    [//Bulimia e Anorexia (Padrões Estéticos)
        "Josias 2D",
        "Guilherme kanhwald 1ºE",
        "Fabrício 3ºB"
    ],
    [// Gordofobia
        "Andressa 1ºE"
    ]
]
var arquivos = {
    txt: textos,
    autorTex: autoTxt,
    imgs: imagens,
    autorDes: autoImg,
}
// ============================ Lógica de Renderização =============================================
function iniciar() {
    const perguntas = document.querySelector("div#perguntas")// chamada de tag, o nome disso é DOM (interação de JS com HTML)
    /* 
    Inserção de div com id opcoes, está dentro da div com id perguntas declarada no HTML.
        Ex: <div id="perguntas">
                <div id="opcoes">
                </div>
            </div>
    */
    var opcoes = document.createElement("div")
    opcoes.setAttribute("id", "opcoes")
    opcoes.setAttribute("class", "content")
    perguntas.appendChild(opcoes)

    // ========================= Fim de Declaração de div ==========================================

    const caminhoOpcoes = document.querySelector("div#opcoes")// chamada da nova div
    caminhoOpcoes.innerHTML += `<h2 id="tituloTema">Temas de artes: </h2>` // inserção de tag na nova div
    caminhoOpcoes.innerHTML += `${questao.pergunta}<br><br>`
    for (var i = 0; i < questao.tema.length; i++) {
        caminhoOpcoes.innerHTML += `<input type="radio" id="pergs${i}" class="radios" name="opcoes" class="botoes">${questao.tema[i]}<br>` //botões radio (botoes de bolinha), sendo inseridas na div que criei
    }
    caminhoOpcoes.innerHTML += `<br><input type="button" value="ENVIAR" onclick="enviar()" id="btn">`// botão de enviar na nova div
    perguntas.innerHTML += `<img src="qrCode_SAmarelo.png" id="qrCode">`
}
function enviar() {
    const res = document.querySelector("div#res")
    res.innerHTML = ""
    /*
    Inserção de div com id allResps, está dentro da div com id res declarada no HTML.
        Ex: <div id="res">
                <div id="allResps">
                </div>
            </div>
    */
    const allResps = document.createElement("div")
    allResps.setAttribute("id", "allResps")
    res.appendChild(allResps)
    const caminhoAllResps = document.querySelector("div#allResps") // chamada da nova div criada

    // ============ Fim de Declaração de div =========================

    /*
    Inserção de divs com ids linha1 e linha2, os dois dentro da div com id allResps declarada anteriormente, aqui no JS.
        EX:  <div id="res">
                <div id="allResps">
                    <div id="linha1">
                    </div>
                    <div id="linha2">
                    </div>
                </div>
            </div>
    */
    var linha1 = document.createElement("div")
    linha1.setAttribute("id", "linha1")
    caminhoAllResps.appendChild(linha1)

    var linha2 = document.createElement("div")
    linha2.setAttribute("id", "linha2")
    caminhoAllResps.appendChild(linha2)
    // ========== Fim de Declaração de divs ==========================
    const caminhoLinha1 = document.querySelector("div#linha1")
    const caminhoLinha2 = document.querySelector("div#linha2")

    // ========== Início de inserção de respostas, dependendo da escolha do usuário: =======    
    for (var i = 0; i < questao.tema.length; i++) {
        if (buttonViewer() == `pergs${i}`) {
            for (let ind = 0; ind < arquivos.txt[i].length; ind++) { // Os fors servem para verificar todas as infos que tem no array dentro do array, assim consigo por todas as infos na tela e não uma info para cada tema
                // Variável que guarda as tags com as informações, as infos estão sendo puxadas pelos arrays na parte de DADOS: 
                var textoTag =
                    `<div class="contEscrito" id="textos${ind}">
                    <p class="conteudo">Texto:<br><br>${arquivos.txt[i][ind]}</p>
                    <p class="autores">Autor:<br>${arquivos.autorTex[i][ind]}</p>
                    </div>`               
                // Inserção da variável com as infos na div que criamos anteriormente no HTML:
                // div id="linha1" guarda todas as infos em texto:
                caminhoLinha1.innerHTML += textoTag
            }// Os comentários deste for se aplicam a todos os outros
            for (let ind = 0; ind < arquivos.imgs[i].length; ind++) {
                var imagemTag =
                    `<div class="contDes" id="imagens${ind}">
                    <img src="${arquivos.imgs[i][ind]}" name="imagem" class="conteudo">
                    <p class="autores">Autor:<br>${arquivos.autorDes[i][ind]}</p>
                    </div>`
                // div id="linha2" guarda todas as imagens
                caminhoLinha2.innerHTML += imagemTag
            }
        }
    }
}
function buttonViewer() { // esta função verifica o que o usuário selecionou. NÃO MEXA!!!!!
    for (var i = 0; i < temas.length; i++) {
        var botao = document.querySelector(`input#pergs${i}`)
        if (botao.checked) {
            return botao.id
        }
    }
}