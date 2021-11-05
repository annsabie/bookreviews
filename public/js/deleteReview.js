const deleteReview = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const review_id = event.target.parentElement.getAttribute("reviewId");

    console.log(review_id);

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


// Delete the clicked note
const handleNoteDelete = (e) => {
    // Prevents the click listener for the list from being called when the button inside of it is clicked
    e.stopPropagation();
    const noteId = e.target.id;

    if (activeNote.id === noteId) {
        activeNote = {};
    }
    deleteNote(noteId).then(() => {
        getAndRenderNotes();
        renderActiveNote();
    });
};