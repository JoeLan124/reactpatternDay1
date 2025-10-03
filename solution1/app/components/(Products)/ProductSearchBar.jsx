import { Search } from "lucide-react";

const ProductSearchBar = ({ onChangeText }) => {
  return (
    <div className="flex gap-2 p-2 bg-blue-500 text-white m-4 rounded-2xl content-start">
      <h1>
        <Search />
      </h1>
      <input
        type="text"
        name="searchBar"
        placeholder="jskjhdkajsdh"
        onChange={(e) => onChangeText(e.target.value)}
        className="bg-white text-black rounded-2xl px-2 w-full"
      />
    </div>
  );
};
export default ProductSearchBar;
