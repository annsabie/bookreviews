// async function addBookHandler(){
//     const book_name = document.querySelector('#your-book-name').innerHTML;
//     const book_id = document.querySelector("#your-book-name").getAttribute("data-book-id");
//     const book_authorname = document.querySelector('#your-book-authorname').innerHTML;
//     const book_description = document.querySelector('#your-book-bookdescription').innerHTML;




//     console.log(book_id)

//     const response =await fetch('/api/books/add-your-book', {
//             method: 'POST',
//             body: JSON.stringify({
//                 bookId,
//                 bookName,
//                 authorName,
//                 bookDescription
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         if (response.ok) {
//             document.location.reload;
//             alert("Book Added!")
//         } else {
//             alert("Cannot add book");
//         }

//         // document.location.replace('/');
//     };

//     document
//     .querySelector('#card-container')
//     .addEventListener('click', addBookHandler(htr));



//need to attach event listener to the container

// const addAReviewButton = document.getElementById('writeAReview');
// const booksDiv = document.getElementById('booksDiv')
// const reviewTextBox = document.createElement("textarea");

const addBtn = document.querySelectorAll(".add")

for (var i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", async function () {

        var bookId = this.getAttribute("data-bookid");
        var bookName = this.getAttribute("data-bookname");
        var authorName = this.getAttribute("data-authorname");
        var bookDescription = this.getAttribute("data-bookdescription");

        console.log(bookId, bookName, authorName, bookDescription);


        const response = await fetch('/api/books/add-your-book', {
            method: 'POST',
            body: JSON.stringify({
                bookId
             
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
          //  document.location.reload;
            alert("Book Added!")
        } else {
            alert("Cannot add book");
        }
        
    })
    
}


            // document.location.replace('/');


// const addAReviewButton = document.getElementById('writeAReview');
// const booksDiv = document.getElementById('booksDiv')
// const reviewTextBox = document.createElement("textarea");

// addAReviewButton.addEventListener(click, function () {
//     console.log("I have been clicked!!");
//     reviewTextBox.appendChild(booksDiv);
// });
// const addAReviewButton = document.getElementById('writeAReview');
// const booksDiv = document.getElementById('booksDiv')
// const reviewTextBox = document.createElement("textarea");


// addAReviewButton.addEventListener("click", function () {
//     console.log("I have been clicked!!");
//     reviewTextBox.appendChild(booksDiv);
// });