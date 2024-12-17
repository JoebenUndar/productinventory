const mongoose = require('mongoose');
const Product = require('../models/product');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/product-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

    const seedDB = async() =>{
        // await User.deleteMany({});

        const products = new Product({
            product: "OHISHI",
            quantity: '2',
            price: '100'     
        })
        
        await products.save();
    }

    seedDB().then(() =>{
        mongoose.connection.close();
    })
