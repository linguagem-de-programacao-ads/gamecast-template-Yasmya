async function buscar(){
    const resposta = await fetch("https://660f44af356b87a55c510d57.mockapi.io/agenda");
    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta:", respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => { //for com recursos a mais, percorre e retorna só oq quiser.
        return `
        <div class="cardItem">
        <div class="dataGame"> 
            <img src="../imagens/calendar-solid.svg" alt=""> ${itemAgenda.dataJogo}
        </div>
        <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
        <div class="descricao">
            <p> <strong>${itemAgenda.nome}</strong> </p>
            <p> ${itemAgenda.descricao} </p>
            <p><strong>Gamers: </strong></p>

            <div class="gamers">
                ${
                    itemAgenda.gamers.map((gamerItem) => {
                        return `
                        <div class="gamerItem">@${gamerItem}</div>
                        `
                    }).join('')
                }
            </div>

          
        </div>  
        <div class="assistir">
                <a class="assistirItem" href="https://www.google.com/"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
        </div>
    </div>
        `
    }).join('');
}

buscar();