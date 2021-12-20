// Funzione creazione quadrato e click
function containerGriglia (container, numeri) {
    let quadrato = document.createElement('div');
    quadrato.className ='quadrato';
    quadrato.innerHTML = numeri;
    container.append(quadrato);
    colore(quadrato, numeri);
}

const lv1Button = document.querySelector(".lv1");
const lv2Button = document.querySelector(".lv2");
const lv3Button = document.querySelector(".lv3");
const bigContainer = document.querySelector('.container-caselle');

function numeroRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}


// Funzione "bomba"
function colore (quadrato, numero) {
    console.log(numeroCasellaBomba, numero)
    if (numeroCasellaBomba.includes(numero)){
        quadrato.addEventListener('click', function(){
            this.classList.add('rosso'); 
            this.classList.remove('blu');    
        })
    }
    if (!numeroCasellaBomba.includes(numero)) {
        quadrato.addEventListener('click', function(){
            this.classList.add('blu'); 
            this.classList.remove('rosso');
        })
    }
}


// Bomba array
let numeroCasellaBomba = [];
const bombeTot = 16;

function numeroRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function bombeF (massimo){
    numeroCasellaBomba = []; 
    while (numeroCasellaBomba.length < bombeTot) {
    const randomN = numeroRandom(1, massimo);
        if (!numeroCasellaBomba.includes(randomN)) {
            numeroCasellaBomba.push(randomN)
        }
    }
}


// L1 + bombe
lv1Button.addEventListener('click', function (){
    bigContainer.innerHTML = '';
    bombeF(100)
    for (let i = 0; i < 100; i++) {
        containerGriglia(bigContainer, i); 

        bigContainer.classList.add('lv1-box');
        bigContainer.classList.remove('lv2-box', 'lv3-box');
    }
});

// L2 + bombe
lv2Button.addEventListener('click', function (){
    bigContainer.innerHTML = '';
    bombeF(80)
    for (let i = 0; i <= 80; i++) {
        containerGriglia(bigContainer, i); 

        bigContainer.classList.add('lv2-box');
        bigContainer.classList.remove('lv1-box', 'lv3-box');
    }
});

// L3 + bombe
lv3Button.addEventListener('click', function (){
    bigContainer.innerHTML = '';
    bombeF(48)
    for (let i = 0; i <= 48; i++) {
        containerGriglia(bigContainer, i); 

        bigContainer.classList.add('lv3-box');
        bigContainer.classList.remove('lv1-box', 'lv2-box');
    }
});






















