"use client"

import React from "react";
import { useCart } from "../../contexts/CartContext";

export function CartDisplay() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  console.log("CartDisplay rendered");

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold mb-2">Cart Context</h3>
      <p>Items in cart: {cart.length}</p>
      <div className="mt-2 space-y-2">
        <button
          onClick={() => addToCart({ id: Date.now(), name: "Product", price: 10 })}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => cart.length > 0 && removeFromCart(cart[cart.length - 1].id)}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
          disabled={cart.length === 0}
        >
          Remove Last
        </button>
        <button
          onClick={clearCart}
          className="px-3 py-1 bg-red-500 text-white rounded"
          disabled={cart.length === 0}
        >
          Clear Cart
        </button>
      </div>
      {cart.length > 0 && (
        <div className="mt-2">
          <p className="font-semibold">Cart Items:</p>
          <ul className="list-disc list-inside">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
