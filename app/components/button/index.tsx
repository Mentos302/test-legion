import styles from "./styles.module.scss";
import Image from "next/image";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.root}>{children}</button>
    </div>
  );
};
