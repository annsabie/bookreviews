const apiKey = "wAABzvExpnITm1lOtyYGjs8ebTeI3aXZ"

$.ajax({
    url: "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" + apiKey,
    method: "GET"
}).then(function(response) {
    console.log(response);

    const bookOne = $("#cardone");
    bookOne.append("<h2 class='card-header'>" + response.results[0].book_details[0].title + "</h2>")
    bookOne.append("<div class='card-body'>" +
        "<h5 class='card-title'>" + response.results[0].book_details[0].author + "</h5>" +
        "<p class='card-text'>" + response.results[0].book_details[0].description + "</p>" +
        "<p>" + "<a href=" + response.results[0].amazon_product_url + ">" + "Buy Book" + "</a>" + "</p>" +
        "</div>"
    )

    const bookTwo = $("#cardtwo");
    bookTwo.append("<h2 class='card-header'>" + response.results[1].book_details[0].title + "</h2>")
    bookTwo.append("<div class='card-body'>" +
        "<h5 class='card-title'>" + response.results[1].book_details[0].author + "</h5>" +
        "<p class='card-text'>" + response.results[1].book_details[0].description + "</p>" +
        "<p>" + "<a href=" + response.results[1].amazon_product_url + ">" + "Buy Book" + "</a>" + "</p>" +
        "</div>"
    )

    const bookThree = $("#cardthree");
    bookThree.append("<h2 class='card-header'>" + response.results[2].book_details[0].title + "</h2>")
    bookThree.append("<div class='card-body'>" +
        "<h5 class='card-title'>" + response.results[2].book_details[0].author + "</h5>" +
        "<p class='card-text'>" + response.results[2].book_details[0].description + "</p>" +
        "<p>" + "<a href=" + response.results[2].amazon_product_url + ">" + "Buy Book" + "</a>" + "</p>" +
        "</div>"
    )

    const bookFour = $("#cardfour");
    bookFour.append("<h2 class='card-header'>" + response.results[3].book_details[0].title + "</h2>")
    bookFour.append("<div class ='card-body'>" +
        "<h5 class='card-title'>" + response.results[3].book_details[0].author + "</h5>" +
        "<p class='card-text'>" + response.results[3].book_details[0].description + "</p>" +
        "<p>" + "<a href=" + response.results[3].amazon_product_url + ">" + "Buy Book" + "</a>" + "</p>" +
        "</div>"
    )

    const bookFive = $("#cardfive");
    bookFive.append("<h2 class='card-header'>" + response.results[4].book_details[0].title + "</h2>")
    bookFive.append("<div class ='card-body'>" +
        "<h5 class='card-title'>" + response.results[4].book_details[0].author + "</h5>" +
        "<p class='card-text'>" + response.results[4].book_details[0].description + "</p>" +
        "<p>" + "<a href=" + response.results[4].amazon_product_url + ">" + "Buy Book" + "</a>" + "</p>" +

        "</div>"
    )
});