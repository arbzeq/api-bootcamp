fetchDogs();

async function fetchDogs() {
    try {
        let response = await fetch("https://majazocom.github.io/Data/dogs.json");
        let data = await response.json();   
        data.forEach((dog) => {
            console.log(dog);
            document.body.innerHTML += `${dog.name} <br>`
        });


    } catch(error) {
        console.log(error);
    }
    
}