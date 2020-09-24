let products = [
    {
        name:"White Tshirt",
        size:"L",
        color:"white",
        price:1200,
        image:"product1.jpeg",
        description:"looking good in white Tshirt"
    },
    {
        name:"WhiteGrey Tshirt",
        size:"M",
        color:"grey",
        price:1500,
        image:"product2.jpeg",
        description:"nice quality"
    },
    {
        name:"DarkBlue Tshirt",
        size:"S",
        color:"darkblue",
        price:900,
        image:"product3.png",
        description:"nice color"
    },
    {
        name:"LightBlue Top",
        size:"M",
        color:"lightblue",
        price:3000,
        image:"product4.jpeg",
        description:"beautiful top"
    },
    {
        name:"Pink Tshirt",
        size:"S",
        color:"pink",
        price:1300,
        image:"product5.jpeg",
        description:"looking good quality"
    },
    {
        name:"Grey Top",
        size:"M",
        color:"grey",
        price:1500,
        image:"product6.jpeg",
        description:"nice top"
    },
];


function displayProducts()
{
    let productsString="";

    products.forEach(function (product) {

        let{name,image,color,description,price,size}=product;

        productsString += ` <div class="product">
            <div class="prodimg">
              <img src="productimages/${image}" width="100%" />
            </div>
            <h3>${name}</h3>
            <p>Price : ${price}$</p>
            <p>Size : ${size}</p>
            <p>Color : ${color}</p>
            <p>${description}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>`;
    });
    document.getElementById("productwrapper").innerHTML = productsString;
}
displayProducts(products);