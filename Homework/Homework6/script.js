/*В этом задании вам предстоит работать с элементами на веб-странице, используя
JavaScript. Вам нужно выполнить несколько действий, связанных с изменением и
извлечением информации из элементов HTML. Ниже приводится список задач

Задачи:
1. Найдите элемент по id, используя getElementById, элемент с id равным
"super_link" и выведите этот элемент в консоль.
2. Внутри всех элементов на странице, которые имеют класс card-link,
поменяйте текст внутри элемента на "ссылка".
3. Найдите все элементы на странице с классом card-link, которые лежат в
элементе с классом card-body, и выведите полученную коллекцию в консоль.
4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50, и выведите его в консоль.
5. Выведите содержимое тега title в консоль.
6. Получите элемент с классом card-title и выведите его родительский узел в
консоль.
7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс card.
8. Удалите тег h6 на странице.*/
//1.
const idEl=document.getElementById('super_link');
console.log(idEl);
//2.
const cardLinkEl=document.querySelectorAll('.card-link');
cardLinkEl.forEach(e=>{e.textContent='ссылка'});
console.log(cardLinkEl);
//3.
const cardBodyLinks = document.querySelectorAll('.card-body.card-link');
console.log(cardBodyLinks);
//4.
const firstDataNumber =
document.querySelector('[data-number="50"]');
console.log(firstDataNumber);
//5
const titleEl=document.querySelector('title');
console.log(titleEl.textContent);
//6
const cardTitle=document.querySelector('.card-title');
console.log(cardTitle.parentNode);
//7
const textPage=document.createElement('p');
textPage.textContent='Привет';
const parentEl=document.querySelector('.card');
parentEl.insertBefore(textPage, parentEl.firstChild);
//8
const tagh6=document.querySelector('h6');
tagh6.remove();