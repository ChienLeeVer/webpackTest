import { name } from './b.js';
import img from '../../sky.jpg';
import '../css/c.css'

console.log(img);
window.onload = ()=>{
    var dom = `<img src=${img}>`;
    var square = document.querySelector('#box');
    square.innerHTML = dom;
};