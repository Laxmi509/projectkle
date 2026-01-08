const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.port;

//port is  configured

app.use(express.json()); //middleware
//product route
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
];
app.get("/products", (req, res) => {
  res.json({
    products,
  });
});
//fetching single product
app.get("/products/:id", (req, res) => {
  id = req.params.id;
  res.json(products[id - 1]);
});
//adding products

app
  .post("/products", function (req, res) {
    id = products.length + 1;
    const { name, price } = req.body;
    const newproduct = { id, name, price };
    products.push(newproduct);
    res.json({
      newproduct,
      message: "new product is added to the list",
    });
  })
  .status(200);

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});
