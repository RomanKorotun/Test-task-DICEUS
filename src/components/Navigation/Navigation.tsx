"use client";

import Link from "next/link";
import styles from "@/components/Navigation/Navigation.module.css";
import { usePathname } from "next/navigation";
import navigation from "@/helpers/navigation/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <section className="section">
      <div className="container">
        <ul className={styles.nav}>
          {navigation.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.path;

            return (
              <li
                key={index}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
              >
                {item.path ? (
                  <Link href={item.path} className={styles.link}>
                    <IconComponent /> {item.label}
                  </Link>
                ) : (
                  <span className={styles.link}>
                    <IconComponent /> {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
