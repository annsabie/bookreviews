const writeReviewEventHandler = async function(event) {
    event.preventDefault();
    console.log(event.target.parentElement);
    console.log('clicked');

    const textBox = document.createElement('input');
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'submit';
    event.target.parentElement.appendChild(textBox);
    event.target.parentElement.appendChild(submitButton);

    submitButton.addEventListener('click', function(event) {
        const book_id = event.target.parentElement.getAttribute("bookId");
        let reviewContent = textBox.value;

        createNewReview(book_id, reviewContent);
    })
};
document.querySelectorAll('.addReview').forEach(element => {
    element.addEventListener('click', writeReviewEventHandler);
});

const createNewReview = async function(bookId, reviewContent) {
    const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
            reviews: reviewContent,
            book_id: bookId,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('your-reviews');
    } else {
        alert("couldn't add review");
    }
};