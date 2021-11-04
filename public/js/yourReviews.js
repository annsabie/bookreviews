const updateReviewEventHandler = async function(event) {
    event.preventDefault();
    console.log('clicked');

    const textBox = document.createElement('input');
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'submit';
    event.target.parentElement.appendChild(textBox);
    event.target.parentElement.appendChild(submitButton);
    submitButton.addEventListener('click', function(event) {
        let reviewContent = textBox.value;
        updateReviewRoute(event.target.book_id, reviewContent);
    })
};
document.querySelectorAll('.updateReview').forEach(element => {
    element.addEventListener('click', updateReviewEventHandler);
});

const updateReviewRoute = async function(bookId, reviewContent) {

    const response = await fetch('/api/reviews/update', {
        method: 'PUT',
        body: JSON.stringify({
            reviews: reviewContent,
            book_id: bookId,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("didn't work bitch!");
    }
}