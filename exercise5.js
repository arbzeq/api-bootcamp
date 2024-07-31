fetchBooks();

async function fetchBooks() {
    try {
        let bookContainer = document.querySelector(".bookContainer");
        let response = await fetch("https://majazocom.github.io/Data/books.json");
        let data = await response.json(); 
        console.log(data);  
        data.forEach((book) => {
            
            let newHTML = `
                    <section class="card">
                        <figure>
                            <img src=${book.cover} alt="book1">
                        </figure>

                        <article>
                            <h3>${book.title}</h3>
                        </article>
                    </section>
            `;
            bookContainer.innerHTML += newHTML;
            
        });


    } catch(error) {
        console.log(error);
    }
    
}
