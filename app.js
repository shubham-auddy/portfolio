const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

var home_menu = document.querySelector('.header .nav-bar .nav-list ul li .home-menu');
var info_menu = document.querySelector('.header .nav-bar .nav-list ul li .info-menu');
var projects_menu = document.querySelector('.header .nav-bar .nav-list ul li .projects-menu');
var about_menu = document.querySelector('.header .nav-bar .nav-list ul li .about-menu');
var contacts_menu = document.querySelector('.header .nav-bar .nav-list ul li .contact-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');  
    mobile_menu.classList.toggle('active'); 
})

document.addEventListener('scroll', () =>{
    var scroller = window.scrollY;
    if(scroller > 300){
        header.style.backgroundColor = '#000000';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

home_menu.addEventListener('click',()=>{
    hamburger.classList.toggle('active');  
    mobile_menu.classList.toggle('active'); 
})
about_menu.addEventListener('click',()=>{
    hamburger.classList.toggle('active');  
    mobile_menu.classList.toggle('active'); 
})
contacts_menu.addEventListener('click',()=>{
    hamburger.classList.toggle('active');  
    mobile_menu.classList.toggle('active'); 
})
projects_menu.addEventListener('click',()=>{
    hamburger.classList.toggle('active');  
    mobile_menu.classList.toggle('active'); 
})
info_menu.addEventListener('click',()=>{
    hamburger.classList.toggle('active');  
    mobile_menu.classList.toggle('active'); 
})