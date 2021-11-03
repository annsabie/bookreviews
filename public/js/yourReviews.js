// add event listeners on update and delete reviews that link to correct CRUD routes

// const { text } = require("express");

const updateReviewEventHandler = async function(event) {
    event.preventDefault();
    console.log(event.target.parentElement);
    console.log('clicked');

    const textBox = document.createElement('input');
    const reviewsDiv = document.getElementById('reviewsDiv');
    event.target.parentElement.appendChild(textBox);
    const reviewText = document.querySelector('#reviewText');

    // const response = await fetch('/api/reviews', {
    //     method: 'UPDATE',
    //     body: JSON.stringify({
    //         reviews: reviewText.value
    //     }),
    //     headers: { 'Content-Type': 'application/json' },
    // });

    //     if (response.ok) {
    //         document.location.replace('/');
    //     } else {
    //         alert("didn't work bitch!");
    //     }
};

// const updateButtons = document.querySelectorAll('.updateReview')
// for (let index = 0; index < updateButtons.length; index++) {
//     const element = updateButtons[index];
//     element.addEventListener('click', updateReviewEventHandler);
// }
document.querySelectorAll('.updateReview').forEach(element => {
    element.addEventListener('click', updateReviewEventHandler);
})