import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../../components/button";
import { FaqSection } from "../faq";

export const HowToMintSection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className="gradient">How to mint</h2>
        <div className={styles.inner}>
          <div>
            <b>01</b>
            <p>
              We have made this part very easy whether you have a crypto wallet
              or not. If you are new to this space, simply click
              <span>{'"Mint"'}</span> and use a credit card.
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
          <div>
            <b>02</b>
            <p>
              If you are familiar with crypto wallets and have Polygon (MATIC)
              in your wallet, simply click “Mint” to go to our minting page:
            </p>
            <ul>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>
                  Press “Connect” to connect your wallet (MetaMask or Wallet
                  Connect)
                </span>
              </li>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>
                  Choose the number of NFTs you would like to purchase
                </span>
              </li>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>
                  Click <span>“Mint”</span>
                </span>
              </li>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>Confirm in your Wallet</span>
              </li>
            </ul>
          </div>
          <div>
            <b>03</b>
            <p>
              If you want to purchase with a credit card, click “Mint” to go to
              our minting page:
            </p>
            <ul>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>
                  Choose the number of NFTs you would like to purchase with a
                  credit card
                </span>
              </li>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>
                  Click <span>“Buy with credit card”</span>
                </span>
              </li>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>Connect with Crossmint and follow the instructions</span>
              </li>
              <li>
                <Image
                  src="/icons/roadmap-star.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span>Purchase your NFT with your credit card</span>
              </li>
            </ul>
          </div>
        </div>
        <FaqSection />
      </div>
    </section>
  );
};
