import Image from "next/image";
import ProductListContainer from "./components/(Products)/ProductListContainer";

export default function Home() {
  return <ProductListContainer userId={2} />;
}
