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
// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('list');
// let listCard = document.querySelector('listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('total');
// let quantity = document.querySelector('quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })
// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: 'stolen_image1.jpg',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: 'stolen_image3.jpg',
//         price: 130000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: 'stolen_image4.jpg',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: 'stolen_image1.jpg',
//         price: 125000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: 'stolen_image1.jpg',
//         price: 150000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: 'stolen_image1.jpg',
//         price: 160000
//     },
// ];
// let listCards = []
// function initApp(){
//     products.forEach((value, key)=>{
//         let newDiv = document.createElement('div');
//         newDiv.innerHTML = `
//         <img src="images/${value.image}"/>
//         <div class = "title">${value.name}</div>
//         `;
//         list.appendChild(newDiv)
//     })
// }
// initApp();
