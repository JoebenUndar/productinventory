const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const productRoutes = require('./server/routes/productRoutes');



const app = express();


// Setting up the view engine
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



app.use('/products', productRoutes);

// Starting the server
app.listen(3000, () => {
    console.log("Serving on port 3000.");
});
