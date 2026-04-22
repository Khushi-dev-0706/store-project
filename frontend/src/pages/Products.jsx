import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    await axios.post("http://localhost:5000/api/products", {
      name,
      price,
      category
    });

    setName("");
    setPrice("");
    setCategory("");

    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`https://khushi-store-backend.onrender.com/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>

      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />

      <input placeholder="Price" value={price}
        onChange={(e) => setPrice(e.target.value)} />

      <input placeholder="Category" value={category}
        onChange={(e) => setCategory(e.target.value)} />

      <button onClick={addProduct}>Add</button>

      <hr />

      {products.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>{item.category}</p>
          <button onClick={() => deleteProduct(item._id)}>
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Products;