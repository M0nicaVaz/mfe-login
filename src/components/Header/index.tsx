"use client";

import React from "react";
import styles from "./styles.module.scss";
import { Button, IconButton } from "shared";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuIcon}>
        <IconButton icon={<MenuIcon />} priority="tertiary" />
      </div>
      <div className={styles.leftContainer}>
        <p className={styles.logo}>bytebank</p>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="" className={styles.navLink}>
                Sobre
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="" className={styles.navLink}>
                Serviços
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.buttons}>
        <Button label="Abrir conta" />
        <Link href={"/home"} className={styles.linkButton}>
          <span className={styles.secondaryButton}>Já tenho conta</span>
        </Link>
      </div>
    </header>
  );
}
