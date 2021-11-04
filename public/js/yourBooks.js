//code to get add review button and display new text box
//not linked right aka none of the js files are linked right
//code to get add review button and display new text box
//not linked right aka none of the js files are linked right
//add yourbook




// const addBookHandler1 = async function (event) {
//     event.preventDefault();
//     console.log(event );
   // alert(event.target);
  // alert("My Book" + id);
// console.log(event.target);
// console.log(event.target.previousElementSibling );
// console.log(event.target.parentNode.firstChild.innerHTML + "child1");
// const bookId = document.querySelector("#book-id");
// const bookId_refined = bookId.innerHTML;

// alert(bookId_refined);

// var bookDesc = event.target.previousElementSibling;
// var authName = event.target.previousElementSibling.previousElementSibling;
// var bookName=event.target.previousElementSibling.previousElementSibling.previousElementSibling;
// console.log("Desc: " + bookDesc.innerHTML);
// console.log("authName: " + authName.innerHTML );
// console.log("bookName: " + event.target.previousElementSibling.previousElementSibling);
//console.log("bookName: " + currNode.previousElementSibling.value );
    //const buttonClicked = event.target;
   
    // Get appropriate sibling elements
    // document.getElementById("book-id").addEventListener("click",function(event) {
    //     if(event.target && event.target.book_name == " ") {
    //       let bookid = event.target.card.split(" ");
    //       if(bookid) {
    //           for(var x = 0; x < bookid.length; x++) {
    //               if(bookid[x] == "classA") {
    //                   console.log("book selected");
    //               }
    //           }
    //       }
    //     }
    //   });
    
    // const bookId = document.getElementById('book-id').value;
    // 
    // 
    // 

    // console.log all values to ensure they're correct

    // await fetch(`/api/books/${bookId}`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         book_name,
    //         book_authorname,
    //         book_description
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    // if (response.ok) {
    //     document.location.reload;
    //     alert("Book Added!")
    // } else {
    //     alert("Cannot add book");
    // }

    // document.location.replace('/');
// };

//your code
// document
//     .querySelector('#card-container')
//     .addEventListener('click', addBookHandler);
//var id;


async function addBookHandler(htr){
    console.log(htr + " boohnkjtygjh");
    const book_name = document.querySelector('#your-book-name').innerHTML;
    const book_id = document.querySelector("#your-book-name").getAttribute("data-book-id");
    const book_authorname = document.querySelector('#your-book-authorname').innerHTML;
    const book_description = document.querySelector('#your-book-bookdescription').innerHTML;

    console.log(book_id)

    const response =await fetch('/api/books/add-your-book', {
            method: 'POST',
            body: JSON.stringify({
                book_id,
                book_name,
                book_authorname,
                book_description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload;
            alert("Book Added!")
        } else {
            alert("Cannot add book");
        }
    
        // document.location.replace('/');
    };

    // document
    // .querySelector('#card-container')
    // .addEventListener('click', addBookHandler(htr));



//need to attach event listener to the container

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