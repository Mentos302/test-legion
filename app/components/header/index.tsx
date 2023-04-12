import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../button";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.root}>
          <Image
            src="logo.svg"
            alt="Picture of the author"
            width={145}
            height={45}
          />
          <div className={styles.main}>
            <nav>
              <a href="#">Roadmap</a>
              <a href="#">About</a>
            </nav>
            <div className={styles.lang}>
              <Image
                src="/images/thailand.png"
                alt="Flag"
                width={30}
                height={30}
              />
              <Image src="/icons/chevron.svg" alt="Flag" width={9} height={5} />
            </div>
            <button className={styles.btn}>
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
