import { arr } from "./db.js"
import { reloadSlots } from "./ui.js"

// a

let slots = document.querySelector('.slots')
reloadSlots(arr, slots)

let showFive = document.querySelector('#show_five')
let showFull = document.querySelector('#show_full')

showFive.onclick = () => {
  let sliced = arr.slice(0, 5)
  reloadSlots(sliced, slots)
}
showFull.onclick = () => {
  reloadSlots(arr, slots)
}

let menu = document.querySelector('.menu')
let openMenu = document.querySelector('.open')

openMenu.onclick = () => {
  menu.classList.toggle('open')
}
let menu_sl = document.querySelector('.menu_slots')

for (let k = 0; k < 1; k++) {
  let menu = document.createElement('div')
  let menu_slots = document.createElement('div')
  let pizza_tex = document.createElement('h2')

  let box = document.createElement('div')
  let photo = document.createElement('img')
  let opisanie = document.createElement('p')
  let controls = document.createElement('div')
  let decrement = document.createElement('button')
  let quantity = document.createElement('span')
  let increment = document.createElement('button')
  let price_menu = document.createElement('div')
  let cena = document.createElement('p')


  menu.classList.add('menu')
  menu_slots.classList.add('menu_slots')
  pizza_tex.classList.add('pizza_tex')
  box.classList.add('box')
  opisanie.classList.add('box-p')
  photo.classList.add('box_img')
  opisanie.classList.add('opisanie')
  controls.classList.add('controls')
  decrement.classList.add('decrement')
  quantity.classList.add('quantity')
  increment.classList.add('increment')
  price_menu.classList.add('price_menu')
  cena.classList.add('price_menu-p')

  menu.append(menu_slots)
  box.append(photo)
  photo.src = './img/81fPKd-2AYL 1.png';
  box.append(opisanie)
  opisanie.innerHTML = "Opna Women's Short Sleeve Moisture";
  box.append(controls)
  controls.append(decrement, quantity, increment)
  decrement.innerHTML = '-';
  quantity.innerHTML = '1';
  increment.innerHTML = '+';
  box.append(price_menu)
  price_menu.append(cena)
  cena.innerHTML = '$7.14';



  menu_sl.append(box)
  console.log(box);
}