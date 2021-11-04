const updateReviewEventHandler = async function(event) {
    event.preventDefault();
    console.log(event.target.parentElement);
    console.log('clicked');

    const textBox = document.createElement('input');
    const submitButton = document.createElement('button');
    event.target.parentElement.appendChild(textBox);
    event.target.parentElement.appendChild(submitButton);

};
document.querySelectorAll('.updateReview').forEach(element => {
    element.addEventListener('click', updateReviewEventHandler);
});

const updateReviewRoute = async function(event) {
    const { text } = require("express");
    const response = await fetch('/api/reviews', {
        method: 'UPDATE',
        body: JSON.stringify({
            reviews: reviewText.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("didn't work bitch!");
    }
}