import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../../../components/button";

export const RaritySection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.meta}>
            <b>CREATION AND RARITY</b>
            <p>
              Thousands of concept images of characters in the five initial film
              franchises were created by Artificial Intelligence and enhanced
              and touched up by our artists. The best were chosen to be part of
              the Legion Universe collection. Rarity is extremely important to
              us and we embedded rarity factors in many ways.
            </p>
            <div className={styles.photos}>
              <Image
                src="/images/rarity1.png"
                alt="Flag"
                width={279}
                height={305}
              />
              <Image
                src="/images/rarity2.png"
                alt="Flag"
                width={400}
                height={480}
              />
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              <Image
                src="/icons/green-start.svg"
                alt="icon"
                width={38}
                height={38}
              />
              <div>
                <b>In images</b>
                <span>
                  Each character from each franchise has many concept images
                  that range from common to legendary to rare.
                </span>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src="/icons/green-start.svg"
                alt="icon"
                width={38}
                height={38}
              />
              <div>
                <b>In colors</b>
                <span>
                  There are seven colors for the frames of the NFTs and one
                  without color. The most rare colors are Gold and Silver.
                </span>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src="/icons/green-start.svg"
                alt="icon"
                width={38}
                height={38}
              />
              <div>
                <b>In symbols</b>
                <span>
                  There are twelve symbols on the top left corner of each Legion
                  Universe NFT. These symbols are ranked according to rarity.
                </span>
              </div>
            </div>
            <div className={styles.item}>
              <Image
                src="/icons/green-start.svg"
                alt="icon"
                width={38}
                height={38}
              />
              <div>
                <b>In symbols</b>
                <span>
                  As a special bonus we created five ULTRA RARE Legion Universe
                  NFTs. These NFTs are GOLD editions of the main characters of
                  each franchise.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seize}>
          <div className={styles.seize_inner}>
            <b>
              This is your only chance to acquire this exclusivelegion digital
              collectible for only
              <br /> 80 MATIC <span>[$86 USD]</span>
            </b>
            <div className={styles.btns}>
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
              <div className={styles.reminder}>
                <Image
                  src="/icons/bell.svg"
                  alt="Bell icon"
                  width={50}
                  height={50}
                />
                <span>an offer that won't come knockingagain!</span>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "500px", position: "relative" }}>
            <Image alt="Mountains" src="/bgs/exchange.png" fill={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
