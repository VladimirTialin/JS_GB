//Задачи:
//1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Все теги прогрузились');
});
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', (e) => {
    console.log('страница загрузилась');
})
/*3. При клике на какой-либо тег на странице в консоль должно выводиться
сообщение следующего вида:
○ Класс "super_element" присутствует в элементе "div".
○ Сообщение должно определять присутствует ли класс "super_element" у
элемента и выводить в нижнем регистре верный тег в данной строке, по
которому был совершен клик.
○ Необходимо использовать делегирование.*/
document.body.addEventListener('click', (e) => {
    const target = e.target;
    const tgName = target.tagName.toLowerCase();
    const superClass = target.className;
    console.log(superClass);
    if (superClass) console.log(`Класс "super_element" присутствует в элементе "${tgName}".`);
    else console.log(`Класс "super_element" отсутствует в элементе "${tgName}".`);
});
/*4. Сделайте так, чтобы при наведении на <textarea> в консоли появлялось
сообщение: "Вы навели на textarea."*/
const textAreaEl = document.querySelector('textarea');
textAreaEl.addEventListener('mouseover', (e) => {
    console.log('Вы навели на textarea');
});
/*5. Необходимо повесить событие клика на тег <ul>. В обработчике события в
консоль выводите текст, который записан внутри элемента кнопки, по которой
был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
Необходимо использовать делегирование.*/
const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', (e) => {
    const target = e.target;
    const tagN = target.tagName.toLowerCase()
    if (tagN === 'button') console.log(target.textContent);;
});
/*6. Вопрос: Почему в console.log сначала пишется текст из 5 задания и только
потом текст из 3 задания, если мы кликаем по кнопкам в <ul>? Ответ
необходимо написать здесь же, под этим комментарием, своими словами.
Ответ: потому что события обрабатываются в порядке добавления,
событие клика на <ul> происходит раньше, чем событие нажатия на
кнопку внутри <ul> будет полностью обработано.
*/
/*7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега
<li>.*/
const liEl = document.querySelectorAll('ul li');
liEl.forEach((el, i) => {
    if (i % 2 === 1) el.style.cssText = 'background: #FFDDAA';
});
