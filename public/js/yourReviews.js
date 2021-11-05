const updateReviewEventHandler = async function(event) {
    event.preventDefault();
    console.log('clicked');

    const textBox = document.createElement('input');
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'submit';
    const book_id = event.target.parentElement.getAttribute("bookId");
    const review_id = event.target.parentElement.getAttribute("reviewId");
    event.target.parentElement.appendChild(textBox);
    event.target.parentElement.appendChild(submitButton);
    submitButton.addEventListener('click', function(event) {
        let reviewContent = textBox.value;
        console.log(book_id);
        console.log(review_id);
        updateReviewRoute(review_id, book_id, reviewContent);
    })
};
document.querySelectorAll('.updateReview').forEach(element => {
    element.addEventListener('click', updateReviewEventHandler);
});

const updateReviewRoute = async function(review_id, book_id, reviewContent) {

    const response = await fetch(`/api/reviews/update/${review_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            reviews: reviewContent,
            book_id: book_id,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        alert('i am ok');
        document.location.reload;
    } else {
        alert("didn't work bitch!");
    }
};