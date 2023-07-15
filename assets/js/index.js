import { crearGrafico } from './crearGrafico.js'

const inputText = document.getElementById('inputText');
    const boton = document.getElementById('submit');

    boton.addEventListener('click', async (e) => {
        e.preventDefault();

        const query = inputText.value;

        // Utilizamos nuestra API
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
        const response = await fetch(url);
        const dataPokemon = await response.json();
        console.log(dataPokemon);

        crearGrafico(dataPokemon);

        });