//import Toolbar from "./components/Toolbar";
import Toolbar2 from "./components/Toolbar2";
import ToastDemo from "./components/ToastDemo";

export default function Home() {
  return (
    <div>
      <Toolbar2
        start={<p>Left</p>}
        center={
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        }
        end={<p>User</p>}
      />

      <ToastDemo />
    </div>
  );
}
