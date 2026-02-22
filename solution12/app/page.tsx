import Toolbar from "./components/Toolbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Toolbar
        start={
          <div className="w-full">
            <p className="bg-amber-800/20 rounded-3xl">
              Start Slot Text
            </p>
          </div>
        }
        center={
          <div className="w-full">
            <p className="bg-amber-800/20 rounded-3xl">
              Center Slot Text
            </p>
          </div>
        }
        end={
          <div className="w-full">
            <p className="bg-amber-800/20 rounded-3xl">
              End Slot Text
            </p>
          </div>
        }
      />
    </div>
  );
}
