let bars = document.querySelector('#tbars');
let navbar = document.querySelector('nav>ul');
bars.addEventListener('click',navactive)
function navactive(){
    navbar.classList.toggle("navact")
}
