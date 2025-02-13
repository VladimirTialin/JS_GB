//Задание 1
const blockEl=document.querySelector('.block');
const divBlock=document.createElement('div');
//Вариант 2
//divBlock.classList.add('item');
divBlock.textContent='Элемент внутри';
divBlock.style.cssText = 'background: #f8f8f8; border: 1px solid #000; padding: 1rem;';
divBlock.setAttribute('class','item_1');
blockEl.appendChild(divBlock);
//Задание 2
const pEl=document.querySelector('.text');
console.log(pEl.previousElementSibling);
console.log(pEl.parentElement);
console.log(pEl.parentElement.firstElementChild);
console.log(pEl.parentElement.className);
//Задание 3
let h2El=document.querySelector('.subtitle');
while(h2El.parentElement){
 h2El=h2El.parentElement;
 console.log(h2El);
}
//задание 4
const btnEl=document.querySelector('.btn');
const inputEl=document.querySelector('.form__input');
const formEl=document.querySelector('.form');
const hEl=document.createElement('h2');
hEl.textContent='Поле не должно быть пустым';
btnEl.onclick=function(){
    if(inputEl.value){}
    else{
        inputEl.style.cssText='border: 1px solid red; margin-bottom: 0';
        hEl.style.cssText='font-size: 10px; color: red; margin-top: 8px';
        formEl.appendChild(hEl);

        
    }
}
console.log(inputText);
