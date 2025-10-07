import Image from "next/image";
import ContactControlled from "./ components/ContactControlled";
import ContactUnConWithRef from "./ components/ContactUnConWithRef";

export default function Home() {
  return (
<div>
      
      <ContactControlled />
      <ContactUnConWithRef/>
</div>
  );
}
