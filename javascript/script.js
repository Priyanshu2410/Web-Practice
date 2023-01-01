// alert("hey boy");

// variables in js


// let name='priyanshu';

// alert(name);

// let a=100;
// let b=64;

// let c=a+b;
// alert(c);

// let a=100;
// a=250;
// alert(a);  
// ans is 250

// let a=100;

// console.log(a);

// const x=100;
// // x=50;
// console.log(x);

// //opertors in js

// a = 10;

// console.log(a+10);
// console.log(a-10);
// console.log(a*10);
// console.log(a/10);
// console.log(a**10);
// console.log(a%4);

// a++;
// a--;


// Primitive Data Types.
//    1) numbers
//    2) strings
//    3) Boolean
//    4) undefined
//    5) null
//    6) Symbol
//    7) objects

// cnst name = "priyanshu once said \"hello\" ";
// const srno = "world";
// const mynoame="priyanshu"
// const newname = `welcome to my website ${myname} `;

// console.log(newname);

// Comparisons and Conditions in js

// 1) == equal to
// 2) != not equal to
// < & > & <= & >= 

// never ever use double euqal use only tripal

// if and else
// in this &&(and) -- only true when two condition true
// ||(or) -- true when one condition true
// let a = 17;
// if(a<18)
// {
//     console.log("you are too young");
// }
// else{
//     console.log("your enough");
// }

// else if()

// Functions

// function greek()
// {
//     let name =prompt("what is your name");
//     console.log("welcome to web site "+name);
// }

// console.log("here");

// greek();

// function inbox(no1,no2)
// {
//     if(no1>no2)
//     {
//         return no1;
//     }
//     else
//     {
//         return no2;
//     }
// }

// let max = inbox(50,6);
// console.log(max);

// objects in js

// const user = {
//     name: "priyanshu",
//     age: 18,
//     num: 106,
//     input: function(){
//         console.log("welcome to my web");
//     }
// };

// console.log(user.input);

// arrray in js

// const listuser = ['priyanshu','om','mann','mihir'];

// console.log(listuser[0]);

// listuser.pop();

// console.log(listuser);

// listuser.push("NEW");

// console.log(listuser);

// listuser.shift();

// console.log(listuser);

// listuser.unshift("ME");

// console.log(listuser);

// console.log(listuser.indexOf("om"));


// for loop in js

// for(let i=0;i<10;i++)
// {
//     if(i==5)
//     {
//         continue;   
//     }
//     console.log(i);
    
// }

// const names = ['priyanshu','Om','mann','mihir'];

// for(let name of names)
// {
//     console.log(name);
// }

// for each   only use in array

// names.forEach(function(name,index){
//     console.log(name,index);
// })

// guessing number game

// function guessgame(){
//     // let randomNr = Math.random()*21;
//     let fixnum = Math.floor(Math.random()*21);
//     // console.log(fixnum);
//     let guess;
//     guess=prompt("guess a number between 1-21");
//     do{
        
//         if(fixnum<guess)
//         {
//             console.log('you guess big number choss low');
//         }
//         else if(fixnum>guess)
//         {
//             console.log('you guess low number choss high');
//         }
//     }while(guess!=fixnum);
//     console.log('you won');
// }

// guessgame();



// document in js

// document.title="we change it";


// const try=document.getElementsByTagName("h2");
// console.log(try);
// const pri=document.getElementById("submit");
// const me=document.getElementsByClassName("item");

// const header = document.querySelector("h2");
// const header = document.querySelectorAll("h2");
// console.log(header);



// const button = document.querySelector('#submit');

// button.addEventListener("click",function(){
//     console.log("Priyanshu Patel");
// });


const button = document.querySelector("#submit");
const todolist = document.querySelector("#todo-list");
const items = todolist.children;

button.addEventListener("click",function(){
    const NewItem = document.createElement("li");
    NewItem.classList.add("Itea");
    NewItem.innerText = "Iteam 3";
    todolist.appendChild(NewItem);
});