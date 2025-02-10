/*// Задание 1
//Задача 1
const arrNum=[1,2,3];
console.log(arrNum);
//Задача 2
const listValue=[1,'Привет',2,5,false,true];
console.log(listValue);
console.log(`Размер массива ${listValue.length}`);
//Задача 3
let value=['a','b','c'];
console.log(value);
for (let i = 0; i < value.length; i++) {
    value[i]=i;  
}console.log(value);

//Задание 2
//Задача 1
let arrNumber=[1,2,3];
for (let i = 0; i < arrNumber.length; i++) {
    arrNumber[i]+=1;
    console.log(arrNumber[i]);
}
//Задача 2
const arr=[];
arr[3]='a';
arr[8]='b';
console.log(arr);
//Задача 3

const arr1=[1,2,3];
arr1.push(4);
arr1.push(5);
console.log(arr1);

//Задача 4
const arr2=[1,2,3,4,true];

arr2.splice(1,1);
arr2.splice(4,4);
console.log(arr2);
console.log(arr2.length);
*/
//Задание 3
//Задача 1
//for (let i = 11; i < 34; i++) {
//    console.log(i);
//}
//задача 2
/*for (let i = 1; i < 100; i++) {
    if(i%2!==0) console.log(i);   
}*/
//Задача 3
/*
for (let i = 100; i > 0; i--) {
    console.log(i);
    
}*/
//Задача 4
/*
let num=50;
let count=0;
do{
    num*=3;
    console.log(num);
    count++;
}
while(num<1000);
console.log(count);*/
//Задание 4
//Задача 1
/*
const arr3=[2,5,9,15,1,4];
arr3.forEach((e)=>{
    if (e > 3 && e < 10) console.log(e);
});
//Задача 2
let sum=0;
for (let i = 2; i <= 100; i++) {
    if(i%2===0) sum+=i; 
}
console.log(sum);
//задача 3
 const arr4=[2,5,9,3,1,4];
 let sumArr=0;
 arr4.forEach((e)=> {
    sumArr+=e;
 });
 console.log(sumArr); */
 //Задача 4
 /*
let str='';
for (let i = 0; i < 10; i++) {
    str=str+`-${i}`;
}
console.log(str+'-');*/
//Задча 5
const arr5=[2,5,9,0,3,1,4];
for (let i = 0; i < arr5.length; i++) {
        if(arr5[i]!==0) console.log(arr5[i]);
        else break;
}