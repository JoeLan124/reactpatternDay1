import Toolbar from "./components/Toolbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Toolbar start={<p>Start Slot Text</p>} center={<p>Center Slot Text</p>} end={ <p>End Slot Text </p>} />
    </div>
  );
}
