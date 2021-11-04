const deleteReview = async function(event) {
    console.log("clicked", event)
    event.preventDefault();
    const id = document.getElementById("idnumber").textContent

    await fetch(`api/reviews/${id}`, {
        method: "DELETE",
        body: JSON.stringify({
            reviewid: id
        }),
        headers: {
            "Content-Type": "application/json",
          },
    })
    .then(function() {
        document.location.replace("/your-reviews");
    })
    .catch(err => console.log(err))
}

document.querySelector("#deleteReview").addEventListener("click", deleteReview);