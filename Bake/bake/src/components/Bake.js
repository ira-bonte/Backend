import React, { useState } from 'react';
import './styles/bake.css';

function Bake() {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productName: product,
          price: price,
          category: category,
          quantity: quantity
        })
      }); 

      if (response.ok) {
        console.log('Product added successfully');
        // Additional logic if needed after successful submission
      } else {
        console.error('Failed to add product');
        // Handle error scenario
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error scenario
    }
  };

  return (
    <div>
       <h3>GREAT BREAD BAKERY</h3>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='first'>
              <div className='one'>
                <label>Product</label>
                <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
              </div>
              <div className='two'>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <label>Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <label>Quantity</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <div className='buttons'>
              <button type="submit">Add Product</button>
            <button type="submit">Search</button>
            </div>
          </form>
          </div><br/><br/>
          <div>
          <form onSubmit={handleSubmit}>
            <div className='first'>
              <div className='one'>
                <label>Product</label>
                <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
              </div>
              <div className='two'>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <label>Category</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            <label>Quantity</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <div className='buttons'>
              <button type="submit">Add Product</button>
            <button type="submit">Search</button>
            </div>
          </form>
          </div>
      </main>
    </div>
  );
}

export default Bake;
