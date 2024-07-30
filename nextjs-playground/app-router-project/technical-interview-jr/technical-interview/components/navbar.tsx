"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="flex gap-16 justify-center py-4">
        <li>
          <Link className={`nav-link ${pathName == '/welcome' ? 'active': ''}`} href="/welcome">
            Welcome
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${pathName == '/task' ? 'active': ''}`} href="/task">
            Exercise
          </Link>
        </li>
      </ul>
    </nav>
  );
}
