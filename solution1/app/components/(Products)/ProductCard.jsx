const ProductCard = ({ product, onAddCard }) => {
  return (
    <div
      key={product.id}
      onClick={() => onAddCard(product)}
      className="p-2  rounded-2xl bg-blue-300 shadow-2xl">
      <h3>{product.name}</h3>
      <h3>{product.category}</h3>
      <p>{product.description.substring(0, 150)}...</p>
      <h3>{product.price}</h3>
      <span className="">
        {new Date(product.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};
export default ProductCard;
