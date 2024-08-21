"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

const navigationData = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <h1 className={`text-xl font-bold ${styles.companyTitle}`}></h1>
      <ul className="flex space-x-4">
        {navigationData.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={`${styles.navLink} ${pathname === item.href ? styles.activeNavLink : ""}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
