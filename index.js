const express = require('express');
const cors = require('cors')
const{ properties } = require('./schema/propertyShema');

const app = express();
const port = 5000;

app.use(cors());


app.get('/properties', (req, res) => {
    res.json(properties);
});

app.post('/properties', (req, res) => {
    const newProperty = req.body;
    properties.push(newProperty);
    res.status(201).json({
        message: 'Property created successfully',
        property: newProperty
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});