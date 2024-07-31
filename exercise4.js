fetchVisitors();

async function fetchVisitors() {
    try {
        let response = await fetch("https://majazocom.github.io/Data/attendees.json");
        let data = await response.json();

        data.forEach((visitor) => {
            console.log(visitor);
        });

        document.body.innerHTML += `EXERCISE 4.2 <br>`
        data.forEach((visitor) => {

            if(visitor.attending) {
                document.body.innerHTML += `${visitor.name} <br>`
            }
        });

        document.body.innerHTML += `EXERCISE 4.3 <br>`
        data.forEach((visitor) => {
            let visitorAllergies = visitor.allergies;
            console.log(visitorAllergies);
            if(visitorAllergies == undefined || visitorAllergies.length == 0){
                document.body.innerHTML += `${visitor.name} <br>`
            }
        });


    } catch(error) {
        console.log(error);
    }
    
}