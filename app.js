require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    description:
      "Latest smartphone with high-resolution display and long battery life.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Backpack",
    price: 49.99,
    category: "Accessories",
    description: "Durable backpack with multiple compartments.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    category: "Footwear",
    description: "Comfortable running shoes for all terrains.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 199.99,
    category: "Electronics",
    description: "Smartwatch with fitness tracking and notifications.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 39.99,
    category: "Gaming",
    description: "High-precision gaming mouse with customizable buttons.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 29.99,
    category: "Audio",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 19.99,
    category: "Accessories",
    description: "Stainless steel water bottle with temperature retention.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Laptop Stand",
    price: 34.99,
    category: "Office Supplies",
    description: "Adjustable laptop stand for better ergonomics.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Desk Lamp",
    price: 24.99,
    category: "Home Decor",
    description: "LED desk lamp with adjustable brightness.",
    image: "https://via.placeholder.com/150",
  },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/deployBackend", (req, res) => {
  res.send("i am deploying my first backend code");
});

app.get('/products' ,(req,res)=>{
    res.json(productsData)
})


app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
