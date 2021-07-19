const  active=document.querySelector('.show');
const menu =document.querySelector('.menuR');
const  a=document.querySelector('.aa');
const  b=document.querySelector('.bb');
const  c=document.querySelector('.cc');
menu.addEventListener('click',()=>{
    active.classList.toggle('active');
    a.classList.toggle('a');
    b.classList.toggle('b');
    c.classList.toggle('c');
})



