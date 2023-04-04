import { Calc } from "./js/classes.js";
import './styles.css'
(() => {
    'use strict'
const botonNumeros = document.querySelectorAll('.numeros');
const valorActual = document.querySelector('.valor')
const valorAnterior = document.querySelector('.valor_anterior')
const operadores = document.querySelectorAll('.operador')
const borrarTodo = document.querySelector('.borrar_todo');
const borrar = document.querySelector('.borrar');
const newCalc = new Calc();
let data;


for (const botonNum of botonNumeros) {
    botonNum.addEventListener('click',(e)=> {
        let numero = e.target.innerText
        valorActual.innerText = valorActual.innerText += numero;
        for (const operador of operadores){
            operador.disabled = false;
        }
    })
}

for (const operador of operadores) {
    operador.addEventListener('click',(e)=> {
         if (valorActual.innerText != '') {
            if(operador.classList.contains("resolver")){
                if (valorActual.innerText !== '') {
                    newCalc.agregarNumero(valorActual.innerText);
                    valorActual.innerText = newCalc.resolver();
                     data = ''
                     valorAnterior.innerText = data;
    
                } else {
                    operador.disabled = true;
                    
                }
            } else {
                newCalc.agregarNumero(valorActual.innerText += e.target.innerText)
             valorActual.innerText = '';
             data = newCalc.getDatos;
             valorAnterior.innerText = data;
            }
         } 
        
    })
}

borrarTodo.addEventListener('click', ()=> {
    newCalc.borrarTodo()
    data = '';
    valorActual.innerText = '';
    valorAnterior.innerText = data;
    console.log(newCalc.datos);
})

borrar.addEventListener('click', ()=>{
   let valorActualText = valorActual.innerText;
   valorActual.innerText = valorActualText.substring(0, valorActualText.length - 1);
})
})();


