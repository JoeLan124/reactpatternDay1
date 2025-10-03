"use client";

import ProductListPresenter from "./ProductListPresenter";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductListContainer = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchProducts();
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `http://localhost:3001/api/users/${userId}`
      );
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      setError("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/products`
      );
      setProducts(response.data);
    } catch (err) {
      console.error("Failed to fetch products");
      // Don't set loading to false here, products are secondary
    }
  };

  const handleAddItems = (product) => {
    const existingItemIndex = cardItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      const updatedItems = [...cardItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity:
          (updatedItems[existingItemIndex].quantity || 1) +
          1,
      };
      setCardItems(updatedItems);
    } else {
      // Add new item with quantity 1
      setCardItems([
        ...cardItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductListPresenter
          products={products}
          user={user}
          onAddCard={handleAddItems}
          cardItems={cardItems}
        />
      )}
    </div>
  );
};
export default ProductListContainer;
