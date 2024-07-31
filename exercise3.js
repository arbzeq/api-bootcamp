
fetchBooks();

async function fetchBooks() {
    try {
        let response = await fetch("https://majazocom.github.io/Data/books.json");
        let data = await response.json();   
        data.forEach((book) => {
            console.log(book);
            if(book.pages < 500) {
                document.body.innerHTML += `${book.title} <br>`
            }
            
        });


    } catch(error) {
        console.log(error);
    }
    
}