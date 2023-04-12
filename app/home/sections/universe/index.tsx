import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../../../components/button";

export const UniverseSection = () => {
  return (
    <section className={styles.root}>
      <div className={styles.top}>
        <div className="container">
          <div className={`${styles.title} ${styles.right}`}>
            <span>LEGION UNIVERSE</span>
          </div>
          <div className={`${styles.title} ${styles.left}`}>
            <span>DTC BENEFITS</span>
          </div>
          <div className={styles.benefits}>
            <div>
              <Image
                src="/images/benefit1.svg"
                alt="Benefit icon"
                width={50}
                height={50}
              />
              <span>VIP access to the film productions</span>
            </div>
            <div>
              <Image
                src="/images/benefit2.svg"
                alt="Benefit icon"
                width={50}
                height={50}
              />
              <span>Opportunity to be first to own comic books</span>
            </div>
            <div>
              <Image
                src="/images/benefit3.svg"
                alt="Benefit icon"
                width={50}
                height={50}
              />
              <span>VIP access to apps and video games</span>
            </div>
            <div>
              <Image
                src="/images/benefit4.svg"
                alt="Benefit icon"
                width={50}
                height={50}
              />
              <span>Participation in events and promotions</span>
            </div>
            <div>
              <Image
                src="/images/benefit5.svg"
                alt="Benefit icon"
                width={50}
                height={50}
              />
              <span>
                Participation in the Legion community and opportunity to vote
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.prevs}>
          <div className={styles.prev}>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image alt="Mountains" src="/bgs/card-left.png" fill={true} />
            </div>
            <div className={styles.inner}>
              <div className={styles.left_text}>
                <b>Film Productions </b>
                <p>
                  You will have access to cast and crew interviews, be able to
                  see the day-to-day activities and even participate in the
                  creative aspects including outfit of characters, designs of
                  creatives and sets through your ability to vote.
                </p>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/prev1.png"
                  alt="Bobblehead Music"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.prev}>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image alt="Mountains" src="/bgs/card-right.png" fill={true} />
            </div>
            <div className={styles.inner}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/prev2.png"
                  alt="Bobblehead Music"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.right_text}>
                <b>Comic Books </b>
                <p>
                  You will have access to early artwork and be able to see the
                  comic book production pipeline. You will also have the
                  opportunity to be among the first to purchase each of the
                  comic books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.prevs}>
            <div className={styles.prev}>
              <div
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image alt="Mountains" src="/bgs/card-left.png" fill={true} />
              </div>
              <div className={styles.inner}>
                <div className={styles.left_text}>
                  <b>Video Games </b>
                  <p>
                    Get ready for battle! You will be part of the creation and
                    get VIP privileges inside the games.
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/prev3.png"
                    alt="Bobblehead Music"
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.prev}>
              <div
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <Image alt="Mountains" src="/bgs/card-right.png" fill={true} />
              </div>
              <div className={styles.inner}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/images/prev4.png"
                    alt="Bobblehead Music"
                    fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className={styles.right_text}>
                  <b>Events & Promotions</b>
                  <p>
                    You will have the opportunity to be involved in events and
                    promotions as well as early access to merchandise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.collection}>
            <div className={styles.meta}>
              <b>NFT COLLECTION</b>
              <p>
                We created this collection to reward our community and welcome
                the world to the Legion Universe.
              </p>

              <div className={styles.label}>
                <Image
                  src="/images/benefit3.svg"
                  alt="Benefit icon"
                  width={50}
                  height={50}
                />
                <span>
                  By purchasing a Legion Universe NFT you become a member of the
                  worldwide Legion Universe Community and get VIP privileges.
                </span>
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.details_inner}>
                <b>Details</b>
                <ul>
                  <li>
                    <span className={styles.key}>Number of NFTs:</span>
                    <span>
                      10,000 Legion Universe NFTs and a collection of 100 Legion
                      Ordinals
                    </span>
                  </li>
                  <li>
                    <span className={styles.key}>Blockchains:</span>
                    <span>Polygon and Bitcoin Ordinals!</span>
                  </li>
                  <li>
                    <span className={styles.key}>
                      Price of Legion Universe NFTs:
                    </span>
                    <span>80 Polygon (MATIC)</span>
                  </li>
                  <li>
                    <span className={styles.key}>
                      Price of Legion Posters Ordinals:
                    </span>
                    <span>
                      10000 (or FREE if you purchase 50 or more Legion Universe
                      NFTs – See below for more information)
                    </span>
                  </li>
                  <li>
                    <span className={styles.key}>Marketplaces:</span>
                    <span>
                      Legion Universe NFTs will be on Opensea and the Legion
                      Poster Ordinals will be traded OTC until an appropriate
                      decentralized exchange is created (This is a great
                      opportunity to get a Bitcoin Ordinal!)
                    </span>
                  </li>
                </ul>
              </div>
              <div
                style={{ width: "100%", height: "110%", position: "relative" }}
              >
                <Image alt="Mountains" src="/bgs/union.png" fill={true} />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "550px",
            position: "relative",
          }}
        >
          <Image alt="Mountains" src="/static/carousel.png" fill={true} />
        </div>
      </div>
    </section>
  );
};
