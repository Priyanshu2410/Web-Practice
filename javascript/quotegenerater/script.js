let btn = document.querySelector('.new-btn');
let quote = document.querySelector('.content');
let person = document.querySelector('.person');

const quotes=[
    {
        quote:`"ssjfnsknfkskskfk"`,
        person:`wjwj`
    },
    {
        quote:`"sjnsn"`,
        person:`sknw`
    },
    {
        quote:`"abcdefgh"`,
        person:`abc`
    },

];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText =quotes[random].quote;
    person.innerText=quotes[random].person;
    
})