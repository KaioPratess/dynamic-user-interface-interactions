import wolf1 from './img/wolf1.jpg';
import wolf2 from './img/wolf2.jpg';
import wolf3 from './img/wolf3.jpg';
import wolf4 from './img/wolf4.jpg';
import wolf5 from './img/wolf5.jpg';
import wolf6 from './img/wolf6.jpg';
import './style.css';
import slide from './slide.js';

const menuBtn = document.querySelector('.drop-menu');
const nav = document.querySelector('.nav');

function openMenu(element, c) {
  element.classList.toggle(c);
}

menuBtn.addEventListener('click', openMenu.bind(null, nav, 'active'));

slide()