"use client";

import { Button } from "../../components/button";
import { Header } from "../../components/header";
import styles from "./styles.module.scss";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className={styles.wrapper}>
      <Header />
      <div className={styles.root}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.info}>
              <h1>
                <span>Next</span>-Generation Superheroes
              </h1>
              <p>
                Five super-powered film franchises, one universe, from a team
                that has worked on Avatar, Avengers, and with Stan Lee. Get VIP
                privileges in films, video games, and comic books with your
                Polygon Legion Universe NFT
              </p>
              <Button>
                <span>
                  Mint now
                  <Image
                    src="/icons/arrow.svg"
                    alt="Flag"
                    width={55}
                    height={15}
                  />
                </span>
              </Button>
            </div>
            <Image src="/images/card.jpg" alt="Flag" width={370} height={550} />
          </div>
        </div>
      </div>
    </section>
  );
};
