const mysql = require('mysql2');
const express = require('express');
const app = express();
const userInfo = require('./userInfo');
const connection = mysql.createConnection(userInfo);

app.set('port', process.env.PORT || 4000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header('Access-Control-Request-Method', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Secrete_Token'
    );
    next();
});

app.get('/products', (req, res, next) => {
    connection.query('SELECT * FROM products', (err, rows) => {
        if (err) console.log('Error: ', err);
        res.send(rows);
    });
});

app.get('/coupons', (req, res, next) => {
    connection.query('SELECT * FROM coupons', (err, rows) => {
        if (err) console.log('Error: ', err);
        res.send(rows);
    });
});

app.listen(app.get('port'), () => {
    console.log(`server connect ${app.get('port')}`);
});
