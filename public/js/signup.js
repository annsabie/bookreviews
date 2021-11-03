const signupFormHandler = async function(event) {
    event.preventDefault();

    const firstnameEl = document.querySelector('#firstname-input-signup');
    const lastnameEl = document.querySelector('#lastname-input-signup');
    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');

    const response = await fetch('/api/users', {
        method: 'POST',
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
    .querySelector('#sign-up-form')
    .addEventListener('submit', signupFormHandler);