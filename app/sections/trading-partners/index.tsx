"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../../components/button";

export const TradingPartnerSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.trading}>
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <Image
              src="/bgs/interrupter.png"
              alt="Bell icon"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.text}>
            <b>Buy 50 Digital Trading Cards</b>
            <p>
              You are guaranteed to receive an opportunity for a{" "}
              <span>CAMEO ROLE</span> in one of the films as well as an
              invitation to one of the <span>RED CARPET SCREENINGS!</span>{" "}
            </p>
            <p>
              <span>PLUS</span> an in person dinner with producers, directors,
              writers and VFX. <span>PLUS</span> with the investment club,
              access to information, investments and funds that are not
              available to the general public.
            </p>
          </div>
        </div>
        <div className={styles.partners}>
          <Image
            src="/images/partners.svg"
            alt="Bell icon"
            width={324}
            height={87}
          />
          <div className={styles.logos}>
            <a href="#">
              <Image
                src="/images/partner1.svg"
                alt="Bobblehead Music"
                width={187}
                height={87}
              />
            </a>
            <a href="#">
              <Image
                src="/images/partner2.svg"
                alt="Bobblehead Music"
                width={187}
                height={87}
              />
            </a>
            <a href="#">
              <Image
                src="/images/partner3.svg"
                alt="Bobblehead Music"
                width={187}
                height={87}
              />
            </a>
            <a href="#">
              <Image
                src="/images/partner4.svg"
                alt="Bobblehead Music"
                width={187}
                height={87}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
