import AdminPanel from "./components/AdminPanel"
import WithDatafetching from "./HOC/withDatafetching";


export default function Home() {
  return (
    <div>
      {/* <AdminPanel /> */}
      <WithDatafetching/>
    </div>
  );
}
