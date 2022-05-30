fetch('https://fakestoreapi.com/products')
  .then((response) => {
    console.log("resolve", response);
    // This method get us the data and passes it so we can use it inside our code. This returns a promise which is asychronous so we cannot save this data in a variable,
    // so we need to reuten it an create a .then method
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let title = data[i].title;
      let price = data[i].price;
      let description = data[i].description;
      let category = data[i].category;
      let image = data[i].image;
      let rating = data[i].rating;

      document.write(
        `${title}<br>${price}<br>${description}<br>${category}<br><img src='${image}'><br>${rating}`
      );
    }
    console.log(data);
  })
  .catch((err) => {
    console.log("resolve", err);
  });
