setTimeout(function () {
    fetch("https://fakestoreapi.com/products")
        .then(function (res) { return res.json(); })
        .then(function (products) {
        // Prepare table HTML
        var tableHTML = "<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>";
        // Loop through products
        products.forEach(function (product) {
            // Add row to table
            tableHTML += "<tr><td>".concat(product.id, "</td><td>").concat(product.title, "</td><td>").concat(product.description, "</td><td>").concat(product.price, "</td></tr>");
        });
        // Close table body
        tableHTML += "</tbody>";
        //
        document.getElementById("table").innerHTML = tableHTML;
        // Hide spinner
        document.getElementById("loader").style.display = "none";
    });
}, 3000);
