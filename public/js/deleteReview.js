const deleteReview = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const review_id = event.target.parentElement.getAttribute("bookId");

    console.log(review_id);

    await fetch(`api/reviews/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
            reviewid: id
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    if (response.ok) {
        alert('i am ok');
        document.location.reload;
    } else {
        alert("didn't work bitch!");
    }
}

document.querySelectorAll('.deleteReview').forEach(element => {
    element.addEventListener('click', deleteReview);
});