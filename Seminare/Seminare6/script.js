const text=document.querySelector('#block p:first-child');
console.log(text);
const firstP=document.querySelector('.www');
console.log(firstP.firstChild.textContent);
const linkText=document.querySelector('.link');
console.log(linkText);
linkText.textContent='link text js';
console.log(linkText);
linkText.href='https://developer.mozzila.org/ru/';
const setImg=document.querySelector('.photo');
setImg.src='https://avatars.mds.yandex.net/get-mpic/5365919/img_id3228578528613603290.jpeg/orig';
const contentEl=document.querySelector('.content');
const textEL=document.createElement('p');
textEL.textContent='Новый текстовый блок';

contentEl.appendChild(textEL);
contentEl.removeChild(textEL);
const btnEL=document.createElement('button');
btnEL.textContent='Отправить';
contentEl.appendChild(btnEL);
btnEL.onclick=function () {
    
    btnEL.textContent='Текст отправлен';
}
