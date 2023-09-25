type Rating = {
	rate: number;
	count: number;
};

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
};

setTimeout(() => {
    fetch("https://fakestoreapi.com/products")
	.then((res) => res.json())
    .then((products: Product[]) => {
        // Prepare table HTML
        let tableHTML =
            "<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>";
        // Loop through products
        products.forEach((product: Product) => {
            // Add row to table
            tableHTML += `<tr><td>${product.id}</td><td>${product.title}</td><td>${product.description}</td><td>${product.price}</td></tr>`;
        });
        // Close table body
        tableHTML += "</tbody>";
        //
        document.getElementById("table")!.innerHTML = tableHTML;
        // Hide spinner
        document.getElementById("loader")!.style.display = "none";
    });
}
, 3000);
