// add event listeners on update and delete reviews that link to correct CRUD routes

const updateReviewEventHandler = async function(event) {
    event.preventDefault();
    console.log('clicked');

    const textBox = document.createElement('textarea');
    const reviewsDiv = document.getElementById('reviewsDiv');
    reviewsDiv.appendChild(textBox);
    const reviewText = document.querySelector('#reviewText');


    const response = await fetch('/api/reviews', {
        method: 'UPDATE',
        body: JSON.stringify({
            first_name: firstnameEl.value,
            last_name: lastnameEl.value,
            email: emailEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('#updateReview')
    .addEventListener('click', updateReviewEventHandler);