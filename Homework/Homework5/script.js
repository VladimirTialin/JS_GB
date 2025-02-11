/*Задание 1
Описание задачи: Дан объект numbers. Необходимо вывести в консоль все значения,
которые больше или равны 3.*/
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    };
for (let key in numbers) {
    if (numbers[key] >= 3) console.log(numbers[key]);
}
//Задача 2
/*Описание задачи: Из объекта post, который задан в константе, выведите значения с
комментариями в консоль.*/
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2, // вывести это число
            },
        },
        {
    userId: 5, // вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", // вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1,
            },
        },
            ],
    };

console.log(`${post.author} ${post.comments[0].rating.dislikes} ${post.comments[1].userId} ${post.comments[1].text}`);

//Задача 3
/*Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
использованием метода forEach.*/
const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
    ];

products.forEach((e)=>{
   e.price*=0.85;
}) 
console.log(products); 
/*Задание 4
Описание задачи:
1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
фотография, используя метод filter.
2. Отсортируйте массив products по цене в порядке возрастания и выведите
отсортированный массив в консоль.*/

const products1 = [
    {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
    },
    {
    id: 8,
    price: 78,
    },
    ];
    // 1 часть
    console.log(products1.filter((e)=> e.photos && e.photos.length>0));
    //2 часть
    const sortedProd = products1.slice().sort((a, b) => a.price - b.price);
    console.log('Отсортированные продукты:', sortedProd);
/*
Задание 5 Необязательное задание
Описание задачи: Есть два массива en и ru. Объедините их в объект, где значения из
первого массива будут ключами, а значения из второго массива — значениями.
*/
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница",
"суббота", "воскресенье"];

const lang={}
for (let i = 0; i < en.length; i++) {
    lang[en[i]]=ru[i];
}
console.log(lang);