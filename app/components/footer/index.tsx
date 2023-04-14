import Image from "next/image";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <Image
            src="logo.svg"
            alt="Picture of the author"
            width={145}
            height={45}
          />
          <div>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
