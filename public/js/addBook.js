const addBookHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const description= document.querySelector("#description");
   
    const response = await fetch("/api/books", {
        method: 'POST',
        body: JSON.stringify({
            book_name: title.value,
            author_name: author.value,
            book_description: description.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert("Book Added!")
    } else {
        alert("Cannot add book");
    }
};

document
    .querySelector('#add-book-form')
    .addEventListener('submit', addBookHandler);