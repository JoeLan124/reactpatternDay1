import Image from "next/image";
import ContactControlled from "./ components/ContactControlled";
import ContactUnConWithRef from "./ components/ContactUnConWithRef";
import ContactUnConNoRef from "./ components/ContactUnConNoRef";

export default function Home() {
  return (
<div>
      
      <ContactControlled />
      <ContactUnConWithRef />
      <ContactUnConNoRef />
</div>
  );
}
