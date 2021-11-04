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
        let reviewContent = textBox.value;
        createNewReview(event.target.book_id, reviewContent);
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
            // user_id => grab in POST request from req.session.user_id
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.reload;
        alert('I worked!');
    } else {
        alert("didn't work bitch!");
    }
}

// const updateReviewRoute = async function(event) {
//     const { text } = require("express");
//     const response = await fetch('/api/reviews', {
//         method: 'UPDATE',
//         body: JSON.stringify({
//             reviews: reviewText.value
//         }),
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace('/');
//     } else {
//         alert("didn't work bitch!");
//     }
// }