const dataInfo=`
[

{
"fileSizeBytes":68103,"url":"https://random.dog/15cde4c5-5208-4e31-aa11-cc4853893392.jpg"
    },
    
{"fileSizeBytes":403620,"url":"https://random.dog/14df227c-0861-4a5e-8d39-401239b9a3f1.png"
    },

{"fileSizeBytes":56996,"url":"https://random.dog/21149-31365-11062.jpg"}
]
`
let data=JSON.parse(dataInfo);

data.forEach(element => {
 const content=document.querySelector('.content');
const contentImg=newElement('div');
const imgEl=newElement('img');
const fileSize=newElement('p');
contentImg.classList.add('content__box-img');
imgEl.classList.add('content__img')
fileSize.classList.add('content__size');
content.appendChild(contentImg);
contentImg.appendChild(imgEl);
content.appendChild(fileSize); 
imgEl.src=element.url;
fileSize.textContent=(`${element.fileSizeBytes} kByte`); 

    });    


function newElement(string){
    return document.createElement(string);
}