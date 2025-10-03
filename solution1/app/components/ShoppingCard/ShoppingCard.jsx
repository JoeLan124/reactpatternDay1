"use client";

import { useState } from "react";

const ShoppingCard = ({
  user,
  products,
  onAddCard,
  cardItems,
}) => {
  const [productsoFCard, setProductsofCard] = useState([]);

  const handleAddingProductToCard = ({ productId }) => {
    setProductsofCard(productId);
  };

  return (
    <div className="bg-white text-black rounded-4xl m-4‚">
      {user?.name}
      <div>
        {cardItems.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            {item.name} {item.price.toFixed(2)}
            {" x "}
            {item.quantity}
            {"  "}
            {`Sum of Product: ${
              item.price.toFixed(2) * item.quantity
            }`}
          </div>
        ))}
        <div>
          Total:{" "}
          {cardItems
            .reduce(
              (accumulator, currentValue) =>
                accumulator +
                currentValue.price * currentValue.quantity,
              0
            )
            .toFixed(2)}
        </div>
      </div>
      <h1>
        {products.map((product) => (
          <div key={product.id}>
            <div
              onClick={() => onAddCard(product)}
              className="text-white"></div>
          </div>
        ))}
      </h1>
    </div>
  );
};
export default ShoppingCard;
