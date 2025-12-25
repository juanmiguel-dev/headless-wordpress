"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { MenuItem } from "@/gql/graphql";

interface NavigationProps {
  menuItems: MenuItem[];
}

export default function Navigation({ menuItems }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={styles.navigation}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {menuItems.map((item: MenuItem, index: number) => {
        if (!item.uri) return null;

        const isActive = pathname === item.uri;

        return (
          <Link
            itemProp="url"
            href={item.uri}
            key={index}
            target={item.target || "_self"}
            className={isActive ? styles.active : ""}
          >
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
