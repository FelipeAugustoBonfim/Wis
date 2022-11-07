let show = true

const menuSection = document.querySelector(".menu-section")

const menuBurguer = menuSection.querySelector(".menu-burguer")

menuBurguer.addEventListener("click", () =>{
    menuSection.classList.toggle("on",show)
    show = !show
})

const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const header = document.querySelector('header');
    

btn.onclick = function(){
    this.classList.toggle('active')
    body.classList.toggle('active')  
    header.classList.toggle('active')  
}

