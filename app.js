'use strict';

const to_do = [
  'Alimentar al perro',
  'Estudiar para prueba escrita',
  'Pagar taxes',
  'Pasear a perro',
  'Comprar entradas para el cine',
];
const GI = {
  createElement(tag, atributes) {
    let element = document;
    return document.createElement(tag);
  },
};

const listTodo = document.querySelector('.list-todo');

to_do.forEach((todo, index) => {
  listTodo.innerHTML += `<li>${todo} <input type="checkbox" name="" id="${index}"></li>`;
});

listTodo.addEventListener('click', (e) => {
  console.log(e.path[1]);
  const chil = e.path[1];
  chil.classList = 'probando';
});
