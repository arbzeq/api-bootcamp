fetchPokemons();

async function fetchPokemons() {
    try {
        let response = await fetch("https://santosnr6.github.io/Data/pokemons.json");
        let data = await response.json();   
        data.forEach((pokemon) => {
            console.log(pokemon);
            document.body.innerHTML += `${pokemon.name} <br>`
        });


    } catch(error) {
        console.log(error);
    }
    
}
