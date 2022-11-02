var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu i');
const i = document.querySelector('.imgmenu');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
        i.removeAttribute('src');
        i.setAttribute('src','MenuIcon.png');
    }else{
        ul.classList.add('open');
        i.removeAttribute('src');
        i.setAttribute('src','x.png');
    }
}