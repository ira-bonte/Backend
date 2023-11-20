import React, { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products/9')
      .then(res => res.json())
      .then(data => setData(data))  // Update state with fetched data
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <table border={{}}>
        <thead>
          <tr style={{display: "flex",justifyContent:"space-between"}}>
            <th>id</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.product}</td>
              <td>{d.price}</td>
              <td>{d.category}</td>
              <td>{d.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
