const express = require('express');
const app = express();
const port = 3000; // Port number can be changed as needed
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'bake',
  password: '',
  database: 'baking'
});

// ... (Other middleware setups)

app.use(bodyParser.json());

app.post('/products', (req, res) => {
  const { name, price, category, quantity } = req.body;

  const insertQuery = 'INSERT INTO `product` (name, price, category, quantity) VALUES (?, ?, ?, ?)';
  connection.query(insertQuery, [name, price, category, quantity], (err, results) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).send('Error inserting data into the database');
      return;
    }
    console.log('Data inserted into MySQL database');
    res.status(201).send('Product added successfully');
  });
});

app.get('/products/:id', (req, res) => {
  try {
    const productId = req.params.id;

    const selectQuery = 'SELECT * FROM `product` WHERE id = ?';
    connection.query(selectQuery, [productId], (err, results) => {
      if (err) {
        console.error('Error fetching product data: ', err);
        res.status(500).send('Error fetching product data from the database');
        return;
      }
      if (results.length === 0) {
        res.status(404).send('Product not found');
      } else {
        res.status(200).json(results[0]);
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'internal server error' });
  }
});

app.put('/products/:id', (req, res) => {
  try {
    const { name, price, category, quantity } = req.body;
    const productId = req.params.id;

    const updateQuery = 'UPDATE `product` SET name=?, price=?, category=?, quantity=? WHERE id=?';
    connection.query(updateQuery, [name, price, category, quantity, productId], (err, results) => {
      if (err) {
        console.error('Error updating data: ', err);
        res.status(500).send('Error updating data in the database');
        return;
      }
      console.log('Data updated in MySQL database');
      res.status(200).send('Product updated successfully');
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'internal server error' });
  }
});

app.delete('/products/:id', (req, res) => {
  try{
        const productId = req.params.id

  const deleteQuery = 'DELETE FROM `product` where id = ?';
  connection.query(deleteQuery, [productId], (err, results) => {
    if (err) {
      console.error('Error inserting data: ', err);
      res.status(500).send('Error inserting data into the database');
      return;
    }
    console.log('Data deleted from MySQL database');
    res.status(201).send('Product deleted successfully');
  });
}catch(error){
  console.error(error);
  return res.status(500).json({error:'internal server error'})
}
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
