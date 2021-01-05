// Carne - 300g por pessoa          + de 6 horas - 500g
// Linguiça - 100g por pessoa       + de 6 horas - 200g
// Cerveja - 1200 ml por pessoa     + de 6 horas - 2000ml
// Refri/Água - 1000 ml por pessoa  + de 6 horas - 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if (adultos == "" || criancas == "" || duracao == "") {
        resultado.innerHTML = `<h3>Não deu :(</h3>
                                    <p>Está faltando algum valor!</p>`;
        return false;
    } else {
        let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
        let qtdTotalLinguica = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);
        let qtdTotalCerveja = cervejaPP(duracao) * adultos;
        let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
        
        resultado.innerHTML = `<p>
                                    <img class="f-left" src="./images/bife.png"/>  
                                        ${qtdTotalCarne / 1000} Kg de Carne  
                                    <img class="f-right" src="./images/bife.png"/>
                                </p>`;

        resultado.innerHTML += `<p>
                                    <img class="f-left" src="./images/linguica.png"/>  
                                        ${qtdTotalLinguica / 1000} Kg de Linguiça  
                                    <img class="f-right" src="./images/linguica.png"/>
                                </p>`;

        resultado.innerHTML += `<p>
                                    <img class="f-left" src="./images/beer.png"/>  
                                        ${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja  
                                    <img class="f-right" src="./images/beer.png"/>
                                </p>`;

        resultado.innerHTML += `<p>
                                    <img class="f-left" src="./images/refrigerante.png"/>  
                                        ${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2l de Bebidas  
                                    <img class="f-right" src="./images/refrigerante.png"/>
                                </p>`;
    }
}

function carnePP(duracao) {
    if (duracao >= 6){
        return 500;
    } else {
        return 300;
    }
}

function linguicaPP(duracao){
    if (duracao >= 6){
        return 200;
    } else {
        return 100;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}
