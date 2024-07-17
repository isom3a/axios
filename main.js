async function getProducts() {
    axios.get('https://dummyjson.com/products')
        .then((response) => {
            console.log(response);
            const result = response.data.products;
            console.log(result);

            let prods = result.map(function(ele) {

                return `
<h2>${ele.title} </h2> 
<img src = ${ele.thumbnail} > </img>
<a href="details.html?id=${ele.id}">Details</a>
`


            })
            document.querySelector('.products').innerHTML = prods;
        });


}
getProducts();