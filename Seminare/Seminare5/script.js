/*Задание 1
//Задача 1
const week={
    1: 'понедельник',
    2:'вторник',
    3:'среда',
    4:'четверг',
    5:'пятница',
    6:'суббота',
    7:'воскресенье'
}
console.log(week[2]);
//Задача 2
const user={
    name:'Иван',
    surname:'Иванович',
    age:'27'
}
console.log(`${user.name} - ${user.surname} - ${user.age}`);
//Задача 3

//Задча 4
user.patronymic=prompt('Введите отчество');
console.log(user);
//Задча 5
delete user.surname;
console.log(user);
*/
//Задание 2
//Задача 1
/*
const arr1=['пн','вт','ср','чт','пт','сб','вс'];
const arr2=[1,2,3,4,5,6,7];
const week={};
for (let i = 0; i < arr1.length; i++) {
    week[arr1[i]]=arr2[i];
}
console.log(week);
//Задача 2
const obj={x:1,y:2,z:3};
for (const item in obj) {
    console.log(obj[item]**2);
}*/
//Задание 3
/*
const obj={
    key1:{
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2:{
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3:{
        key1: 7,
        key2: 8,
        key3: 9,
    },
};
let sum=0;
for (const keyUp in obj) {
    for (const keyIn in obj[keyUp]) {
        sum+=obj[keyUp][keyIn];
    }
}
console.log(sum);*/
//Задание 4
const riddies={
    question:'Зимой и летом одним цветом',
    answer:'елка',
    askQuestion(){
    let userAnswer=prompt(this.question);
    if(this.answer===userAnswer.toLocaleLowerCase()) console.log('Вы выиграли');
    else console.log('Вы проиграли');
}}
riddies.askQuestion();