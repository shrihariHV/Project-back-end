const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// const mySqlConnection = require('./db-connection')
const productRoutes = require('./routes/products');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));




app.use("/products", productRoutes);


app.listen(3000, () => console.log(`Server listening on port....`))

