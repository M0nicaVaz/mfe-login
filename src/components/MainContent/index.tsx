import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export default function MainContent() {
  return (
    <section className={styles.mainContent}>
      <div className={styles.container} aria-hidden>
        <h1 className={styles.title} tabIndex={0}>
          Crie sua conta com a gente!
        </h1>
        <p className={styles.text} tabIndex={0}>
          Experimente mais liberdade no controle da sua vida financeira.
        </p>
      </div>
      <div className={styles.imageBox}>
        <Image
          tabIndex={-1}
          aria-hidden
          className={styles.image}
          height={0}
          width={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ width: "28rem", height: "auto" }}
          src="/lp_img.png"
          alt=""
        />
      </div>
    </section>
  );
}
