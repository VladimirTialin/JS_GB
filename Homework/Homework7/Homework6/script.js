/*В этом задании вам предстоит выполнять различные манипуляции с элементами на
веб-странице, используя JavaScript и Document Object Model (DOM). Ниже приводится
список задач
Задачи:
1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
super-dropdown. Используйте методы forEach и querySelectorAll, а
также свойство classList у элементов.
2. У элемента с классом btn необходимо убрать класс btn-secondary, если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
3. Необходимо удалить класс dropdown-menu у элемента, у которого
присутствует класс menu.
4. Используя метод insertAdjacentHTML, добавьте после div с классом
dropdown следующую разметку: <a href="#">link</a>.
5. У элемента с id="dropdownMenuButton" замените id на superDropdown.
6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует
атрибут aria-labelledby, равный dropdownMenuButton, используя
dataset.
7. Удалите атрибут type у элемента с классом dropdown-toggle.*/
//1.
const dropdownEls=document.querySelectorAll('.dropdown-item');

dropdownEls.forEach(el=>{
    el.classList.add('super-dropdown');
});
//2.
const btnEl=document.querySelector('.btn');
console.log(btnEl);
if(btnEl.classList.contains('btn-secondary'))
    btnEl.classList.remove('btn-secondary');
else btnEl.classList.add('btn-secondary');
//3.
const menuEl=document.querySelector('.menu');
if(menuEl.classList.contains('dropdown-menu'))
    menuEl.classList.remove('dropdown-menu');
console.log(menuEl);
//4.
const dropdownEl=document.querySelector('div.dropdown');
dropdownEl.insertAdjacentHTML('afterend','<a href="#">link</a>');
console.log(dropdownEl);
//5.
const idDropdownEl=document.querySelector('#dropdownMenuButton');
idDropdownEl.id='superDropdown';
console.log(idDropdownEl);
//6.
const ariaEl =
document.querySelector('[aria-labelledby="dropdownMenuButton"]');
if (ariaEl) {
ariaEl.dataset.dd = '3';
}
console.log(ariaEl);
//7
const toggleEl=document.querySelector('.dropdown-toggle');
if (toggleEl) {
    toggleEl.removeAttribute('type');
    }
console.log(toggleEl);


