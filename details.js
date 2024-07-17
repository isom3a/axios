async function getDetails() {

    console.log(window.location.search);

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    axios.get('https://dummyjson.com/products/details.html?id=''${id}')
    .then((response) => {

            const { description, rating, stock, tags } = response.products;
            document.querySelector('.description').textContent = description;
            document.querySelector('.rating').textContent = rating;
            document.querySelector('.stock').textContent = stock;
            document.querySelector('.tags').textContent = tags;


        });
}

getDetails();