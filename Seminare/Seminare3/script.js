//Задание 1
//задача 1
//const helloUser= (userName, userSurname,userAge) =>{
//    alert(`Привет ${userName} ${userSurname} с возрастом ${userAge}`);
//}
//const userName=prompt('Введите Ваше имя');
//const userSurname=prompt('Введите Вашу фамилию');
//const userAge=Number(prompt('Введите Ваш возраст'));
//helloUser(userName,userSurname,userAge);

//задача 2
//const pow=(number)=>{
//    return number**2;
//}
//const number=Number(prompt('Введите число'));
//alert(pow(number));

//задача 3

//const whatIsNumber=()=>{
//    const number=prompt('Введите число');
//    alert((number < 0) ? '---' : '+++');
//}
//whatIsNumber();

// задание 2
//задача 1

const sum=(param1,param2,param3)=>{
    return param1+param2+param3;
}

console.log(sum(2,3,5));
// задча 2
let param1=1;
let param2=2;
let param3=3;

console.log(sum(param1,param2,param3));
//задача 3

function func(num =5){
    console.log(num*num);
}
func(2);
func(3);
func();

//задание 3

//задача 1

const sqrt=(number) => {
    return Math.sqrt(number);
}

//let num1=3;
//let num2=4;
//console.log(sqrt(num1)+sqrt(num2));

 //задача 2

 //const min=(a,b)=>{
 //   console.log((a>b)? b: a);
 //}
 //min(61,9);

 //задание 4
 //задача 1

 const dayOfTheWeek=(number)=>{
if(number > 0 && number <8){
    switch(number) {
        case 1: return 'Понедельник';
        case 2: return 'Вторник';
        case 3: return 'Среда';
        case 4: return 'Четверг';
        case 5: return 'Пятница';
        case 6: return 'Суббота';
        case 7: return 'Воскресенье';}
 }
 return 'Неправильное число недели';
}
//const userNumber=Number(prompt('Ввелите число недели'));
//console.log(dayOfTheWeek(userNumber));

//задача 2

const helloUserToTime=(username)=>{
    let time = formatTime(now.getHours());
    if (time>'00' && time<='06') console.log(`Доброй ночи ${username}`);
    else if (time>'06' && time<='12') console.log(`Доброе утро ${username}`);
    else if (time>'12' && time<='18') console.log(`Доброй день ${username}`);
    else console.log(`Добрый вечер ${username}`);
}
helloUserToTime('Владимир');

