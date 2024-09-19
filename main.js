<script src="main.js"></script>

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes)

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
}

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

campoSenha.value = letrasMaiusculas;

function geraSenha(){
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(letrasMaiusculas[numeroAleatorio]);
    }
}

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

campoSenha.value = senha;

function geraSenha(){

    let senha = ''  ;
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }

    campoSenha.value = senha;
}
    campoSenha.value = senha;

let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
console.log(alfabeto);

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}

if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}

if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}

if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}

for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + alfabeto[numeroAleatorio];
}

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}

const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

function classificaSenha(){
    forcaSenha.classList.add('forte');

}

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha();
}

function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12 ) {
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
}

valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);

valorEntropia.textContent = Math.floor(2**entropia/(100e6*60*60*24));

valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24));

valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";


