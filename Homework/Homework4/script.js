/*Задание 1
Описание задачи: Используя цикл for, выведите в консоль 11 строк, где каждая
строка содержит индекс и описание числа (0 - это ноль, 1 - нечетное число, 2 - четное
число и т.д.).*/

for (let i = 0; i < 11; i++) {
    if (i == 0) console.log(`${i} - это ноль`);
    else if (i % 2 === 0) console.log(`${i} - четное число`);
    else console.log(`${i} - нечетное число`);
}
/*
Задание 2
Описание задачи: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].*/
const arrayNumber = [1, 2, 3, 4, 5, 6, 7];
arrayNumber.splice(arrayNumber.indexOf(4), 1);
arrayNumber.splice(arrayNumber.indexOf(5), 1);
console.log(arrayNumber);

/*Задание 3
Описание задачи:
1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
2. Рассчитайте сумму элементов массива.
3. Найдите минимальное число в массиве.
4. Определите, есть ли в массиве число 3.
*/
 const arr=[2,5,7,6,3];
 let sum=0;
 arr.forEach((e)=> sum+=e);
 console.log(`Сумма элементов массива = ${sum}`);
 let minNumber=arr.reduce((min, e) => Math.min(min, e));
 console.log(`Минимальное число массива = ${minNumber}`);
 for (let i = 0; i < arr.length; i++) {
    if(arr[i]===3) console.log(`Число  найдено`);
    else {
        console.log(`Число не найдено`);
        break;
    }
 }
 /*
 Задание 4 Необязательное задание
Описание задачи: Используя цикл for, выведите в консоль "горку" из символов x с 20
рядами.*/
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
    }