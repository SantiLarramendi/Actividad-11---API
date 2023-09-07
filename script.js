
        function getGarchompData() {

            document.getElementById('garchompData').style.display = 'block';
            document.getElementById('showButton').style.display = 'none';
            
            
            fetch(' https://pokeapi.co/api/v2/pokemon/garchomp')
                .then(response => response.json())
                .then(data => {
                    const estadisticas = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');

                    const garchompData = `
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Altura:</strong> ${data.height / 10} metros</p>
    <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
    <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
    <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
    <p><strong>Estadísticas:</strong> ${estadisticas}</p>
    `;
                    document.getElementById('garchompData').innerHTML = garchompData;
                })
                .catch(error => {
                    console.error('Error al obtener los datos de Garchomp:', error);
                });
        }

        function showMegaGarchompImage() {
            document.getElementById('megaGarchompImage').style.display = 'block';
            document.getElementById('showMegaGarchompButton').style.display = 'none';
        }
