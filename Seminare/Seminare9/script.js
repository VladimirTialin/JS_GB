//Задача 1
const checkEl=document.querySelector('.check');
const connectBtnEl=document.querySelector('.connect');
const textEl=document.createElement('p');
const labelEl=document.querySelector('.label');
textEl.textContent='Необходимо согласиться с условиями.';
console.log(checkEl.checked);
connectBtnEl.addEventListener('click',(e)=>{
    if(checkEl.checked){
        console.log('Согласен');
        textEl.remove();
    } else{
        textEl.style.cssText='position: absolute; color: red; font-size: 12px';
        labelEl.appendChild(textEl);

        e.preventDefault();
    }
});
//Задача 2
const radioAllEl=document.querySelectorAll('.radio');
const drinkDbtn=document.querySelector('.drink');
drinkDbtn.addEventListener('click',(e)=>{
    radioAllEl.forEach(element => {
    if(element.checked) console.log( `${element.nextElementSibling.textContent} закончился`);
})
} );

radioAllEl.forEach(element => {
    element.addEventListener('change', (e)=>{
        if(element.checked) console.log( `${element.nextElementSibling.textContent} закончился`);
    })
});
//Задача 3
const textPass=document.querySelector('.password');
/*
const btnPass=document.querySelector('.btn__pass');
textPass.addEventListener('input', (e)=>{
    if(textPass.value==='пароль'){
        textPass.style.cssText='border: 1px solid green';
    }
    else textPass.style.cssText='border: 1px solid red';

});*/
//Задача 4
const h1El=document.querySelector('.header');

textPass.addEventListener('input', (e)=>{
    h1El.textContent=textPass.value;
});
array.forEach(element => {
    
});