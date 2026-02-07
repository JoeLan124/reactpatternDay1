type productprops = {
    price: number
}

    const ProductCard = ({ price }:productprops) => {
          const tax = price * 0.18;
  
        return (
    <div>
      <h3>Price: {price}</h3>
      <button onClick={() => console.log(price)}>Log</button>
    </div>
      )
    }
    export default ProductCard