const ctx = document.getElementById('myChart');

    // Se crea el gráfico con Charts.js
    const colores = pokemon.stats.map(() =>
        `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)}
    )`
    );

    graficoHabilidades = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pokemon.stats.map((stat) => stat.stat.name),
            datasets: [
                {
                    label: pokemon.name,
                    data: pokemon.stats.map((stat) => stat.base_stat),
                    backgroundColor: colores,
                    hoverOffset: 4,
                },
            ],
        },
    });
