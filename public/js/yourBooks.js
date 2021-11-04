//code to get add review button and display new text box
//not linked right aka none of the js files are linked right





const addAReviewButton = document.getElementById('writeAReview');
const booksDiv = document.getElementById('booksDiv')
const reviewTextBox = document.createElement("textarea");

addAReviewButton.addEventListener("click", function() {
    console.log("I have been clicked!!");
    reviewTextBox.appendChild(booksDiv);
});