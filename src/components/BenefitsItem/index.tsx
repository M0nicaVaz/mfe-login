import React from "react";
import styles from "./styles.module.scss";

type BenefitsItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function BenefitsItem({
  icon,
  title,
  description,
}: BenefitsItemProps) {
  return (
    <div className={styles.benefitsItem}>
      <div aria-hidden className={styles.icon}>
        {icon}
      </div>
      <p tabIndex={0} className={styles.title}>
        {title}
      </p>
      <p tabIndex={0} className={styles.description}>
        {description}
      </p>
    </div>
  );
}
