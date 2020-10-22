window.addEventListener('unload',() => localStorage.setItem('vals', [...document.querySelectorAll('input[type="text"]')].map((e,i) => e.value)) ); 

let vals = localStorage.getItem('vals') ? localStorage.getItem('vals').split`,` : '';
let inp = document.querySelectorAll('input[type="text"]'); //Все элементы с text 
for(let i = 0; i < inp.length; i++) vals[i] ? inp[i].value = vals[i] : '';