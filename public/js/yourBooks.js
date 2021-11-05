const addBtn = document.querySelectorAll(".add")

for (var i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", async function() {

        var bookId = this.getAttribute("data-bookid");
        var bookName = this.getAttribute("data-bookname");
        var authorName = this.getAttribute("data-authorname");
        var bookDescription = this.getAttribute("data-bookdescription");

        console.log(bookId, bookName, authorName, bookDescription);


        const response = await fetch('/api/books/add-your-book', {
            method: 'POST',
            body: JSON.stringify({
                bookId

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert("Cannot add book");
        }

    })

}