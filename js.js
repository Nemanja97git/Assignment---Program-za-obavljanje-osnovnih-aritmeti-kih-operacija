window.addEventListener('load', funkcija, false);

function funkcija() {

var prvi = document.getElementsByTagName('input')[0];
var drugi = document.getElementsByTagName('input')[1];
var znak= document.querySelector('select');
var izlaz = document.querySelector('output');
var dugme = document.getElementsByTagName('input')[2];
var simbol;

dugme.addEventListener('click', racunaj, false);

function racunaj() {

var simbol = znak.value;
var br = parseFloat(prvi.value);
var dr = parseFloat(drugi.value);

switch(simbol) {

case '+': izlaz.value = br + dr;break;
case '-': izlaz.value = br - dr;break;
case '*': izlaz.value = br * dr;break;
case '/': izlaz.value = br / dr;break;






}






}




}
