"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const NavBar = () => {

  const pathname = usePathname()
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1>Navbar</h1>
        <div>x</div>
      </div>
      <div className="flex flex-col text-sm gap-2">
        <Link
          href="/admin"
          className={`${
            pathname === "/admin" ? "" : "text-gray-600"
          }`}>
          Admin
        </Link>

        <Link
          href="/profile"
          className={`${
            pathname === "/profile" ? "" : "text-gray-600"
          }`}>
          Profile
        </Link>
        <Link
          href="/reports"
          className={`${
            pathname === "/reports" ? "" : "text-gray-600"
          }`}>
          Reports
        </Link>
      </div>
    </div>
  );
}
export default NavBar