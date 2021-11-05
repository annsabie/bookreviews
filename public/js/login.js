const loginFormHandler = async function(event) {
    const emailEl = document.querySelector('#email-input-login');
    const passwordEl = document.querySelector('#password-input-login');

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email: emailEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/your-books');
    } else {
        alert('Failed to login');
    }
};

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);