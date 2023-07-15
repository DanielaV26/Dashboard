import { crearGrafico } from './crearGrafico.js'

const inputText = document.getElementById('inputText');
const boton = document.getElementById('submit');
const div = document.getElementById('mainPage');

    boton.addEventListener('click', async (e) => {
        e.preventDefault();

        const query = inputText.value;

        // Utilizamos nuestra API
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
        const response = await fetch(url);
        const dataPokemon = await response.json();
        console.log(dataPokemon);

      div.innerHTML += `
      <h2>${dataPokemon.name}</h2>
      <img src=${dataPokemon.sprites.front_default} alt=${dataPokemon.name}/>
      `;

        crearGrafico(dataPokemon);

        });