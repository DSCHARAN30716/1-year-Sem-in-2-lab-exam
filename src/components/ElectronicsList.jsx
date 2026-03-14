import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ElectronicsList() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className="product-container">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ElectronicsList;