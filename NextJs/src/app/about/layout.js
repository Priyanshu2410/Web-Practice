"use client";
import Link from "next/link";
import "./about.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/about/aboutteacher" ? (
        <nav>
          <ul className="nav-menu">
            <li>
              <Link href="/about">About-Main</Link>
            </li>
            <li>
              <Link href="/about/aboutstudent">About-student</Link>
            </li>
            <li>
              <Link href="/about/aboutteacher">About-teacher</Link>
            </li>
          </ul>
        </nav>
      ) : null}
      {children}
    </div>
  );
}
