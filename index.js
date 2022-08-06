const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

let products = [];

app.get('/', function (req, res) {
    res.render('pages/index.ejs');   
});

app.post('/productos',(req, res) => {
    const obj  = req.body;//name, price, photo
    console.log("productos: ", obj);
    products.push(obj);
    res.redirect('/');
})

app.get('/productos', (req, res) => {
    res.render('pages/productos.ejs', {
        products: products,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', err => {
    console.log(err);
});