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
let search = document.querySelector("#search")
let input = document.querySelector("#input")
search.addEventListener('click',()=>{
    input.classList.toggle('active')
})


// { <script type="text/javascript"> }
// function search() {
// let filter = document.getElementById('find').value.toUpperCase();
// let item = document.querySelectorAll('.product');
// let l = document.getElementsByTagName('h3');
// for(var i = 0;i<=l.length;i++){
// let a=item[i].getElementsByTagName('h3')[0];
// let value=a.innerHTML || a.innerText || a.textContent;
// if(value.toUpperCase().indexOf(filter) > -1) {
// item[i].style.display="";
// }
// else
// {
// item[i].style.display="none";
// }
// }
// }
// </script>