const deleteReview = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const review_id = event.target.parentElement.getAttribute("reviewId");

    const response = await fetch(`api/reviews/${review_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    if (response.ok) {
        document.location.reload();
    } else {
        alert("failed to delete");
    }
}

document.querySelectorAll('.deleteReview').forEach(element => {
    element.addEventListener('click', deleteReview);
});