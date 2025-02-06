/*Задание 1
Описание задачи: Создайте функцию, которая возводит переданное число в куб.
Необходимо использовать эту функцию для вычисления и вывода в консоль результата 
2(3) + 3(3)

*/
const numberCubed = (number) => {
    return Math.pow(number, 3);
}
const result = numberCubed(2) + numberCubed(3);

console.log(result);

/*Задание 2
Описание задачи:
1. Пользователь вводит с клавиатуры число. Если введён текст, необходимо
вывести сообщение о неверном значении.
2. Создайте функцию, которая вычисляет 13% от данного числа и выводит в
консоль текст:
"Размер заработной платы за вычетом налогов равен “значение”".
*/
function calculateSalary(salary) {
    return salary * 0.87;
}


function addNumber() {
    let value = prompt('Введите число');
    while (true) {
        if (isNaN(Number(value))) value = prompt('Введите число');
        else return Number(value);
    }
}
console.log(`Размер заработной платы за вычетом налогов равен ${calculateSalary(addNumber())}`);

/*Задание 3
Описание задачи: Пользователь вводит с клавиатуры 3 числа. Создайте функцию,
которая определяет максимальное значение среди этих чисел.*/

const num1 = addNumber(),
    num2 = addNumber(),
    num3 = addNumber();
function maxNumber(param1, param2, param3) {
    let value = param1;
    if (value < param2) value = param2;
    if (value < param3) value = param3;
    return value;
}
console.log(`max = ${maxNumber(num1, num2, num3)}`);

/*Задание 4
Описание задачи: Реализуйте четыре функции, каждая из которых выполняет одну из
следующих операций с двумя числами:
1. Сложение
2. Вычитание
3. Умножение
4. Деление
Функции должны возвращать результат операции.
*/

function sum(x,y) {
    return x+y;
}
function sub(x,y) {
    return x-y;
}
function division(x,y) {
    return (y!==0)? x/y: `Делить на ${y} нельзя`;
}
function multi(x,y) {
    return x*y;
}

console.log(sum(3,5));
console.log(sub(8,3));
console.log(division(10,2));
console.log(multi(4,8));