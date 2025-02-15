
//задание 1
const btnEl = document.querySelector('.button');

document.addEventListener ('DOMContentLoaded', (e) => {
    console.log('Страница загружена');
});
btnEl.addEventListener ('click', (e) => {
    console.log('событие onclick');
});
btnEl.addEventListener ('click', (e) => {
    console.log('событие addEventListener');
});
//Задание 2
const buttons=document.querySelectorAll('.list-button');

buttons.forEach(element =>{
    element.addEventListener('click',function(e) {
        const target=e.target;
        console.log(target);
    });
});
let count=0;
const button2=document.querySelector('.button2');
button2.addEventListener('click',function(e){
        console.log(++count);
});
const button3=document.querySelector('.button3');
button3.addEventListener('click', function(e){
    button3.textContent='Вы нажали на эту кнопку';
});
//Задание 3
const textbntEl=document.querySelector('.text__button');
const h1El=document.createElement('h1');
h1El.textContent='Новый заголовок';
textbntEl.addEventListener('click', function(e){
    textbntEl.parentElement.appendChild(h1El);
});
const mouseEventEl=document.querySelector('.mouse-event');
mouseEventEl.addEventListener('mouseover',(e)=>{
    console.log('Вы невели на данную копку');
    mouseEventEl.style.cssText='background: green; color: white';
});
mouseEventEl.addEventListener('mouseout',(e)=>{
    console.log('Наведение на кнопку больше нет');
    mouseEventEl.style.cssText='background: #ff9944;';
});

const btnAddEl=document.querySelector('.add');
const btnDelEl=document.querySelector('.delete');
const ulEL=document.querySelector('.ul');

btnAddEl.addEventListener('click', function(e){
    const liEl= document.createElement('li');
    liEl.textContent='Новый элемент';
    liEl.className='li';
    ulEL.appendChild(liEl);
});
btnDelEl.addEventListener('click', function(e){
    const firstLisrEl=document.querySelector('.li:first-child');
    ulEL.removeChild(firstLisrEl);
});

const addCkick=document.querySelector('.button-click');
addCkick.addEventListener('click',(e)=>{
    addCkick.classList.add('click');
});