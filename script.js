let navBar = document.querySelector(".navBar")
let navLink = document.querySelector(".navLink")
let navIcons = document.querySelector(".navIcons i")
  

navIcons.addEventListener('click',()=>{
    navLink.classList.toggle('active')
    navIcons.classList.toggle('bx-x')
})
// windows.onscroll=()=>{
//     if(window.scrollY > 30){
//         navBar.classList.toggle('active')
//     }
// }

window.onscroll=()=>{
    if(window.scrollY > 60){
        navBar.style.backgroundColor='black';
    }
}