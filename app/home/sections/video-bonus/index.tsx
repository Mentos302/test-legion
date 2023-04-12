import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../../../components/button";

export const VideoBonusSection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.video}>
          <Image
            src="/static/video.png"
            alt="Picture of the video"
            width={1160}
            height={760}
          />
        </div>
        <div className={styles.bonus}>
          <div>
            <div className={styles.header}>
              <Image
                src="/images/bonus.png"
                alt="Picture of the video"
                width={470}
                height={65}
              />
              <p>
                Qualify for the following Bonus Packs by purchasing the Bonus
                Pack number of Legion Universe Digital Trading Cards. A Bonus
                Pack gives you additional physical bonuses (items mailed to you)
                as well as potential opportunities to join with us in the
                physical production and premiers of the films.
              </p>
            </div>
            <div className={styles.grid}>
              <div>
                <Image
                  src="/images/bonus1.png"
                  alt="Legion 5 Pack icon"
                  width={65}
                  height={65}
                />
                <b>Legion 5 Pack</b>
                <ul>
                  <li>
                    <span>01</span>
                    <p>
                      Receive the Premier Edition of the Legion Trading Card
                      Game
                    </p>
                  </li>
                  <li>
                    <span>02</span>
                    <p>
                      Be entered in a pool to win the opportunity to be an extra
                      in one of the films
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/bonus2.png"
                  alt="Legion 25 Pack icon"
                  width={65}
                  height={65}
                />
                <b>Legion 25 Pack</b>
                <ul>
                  <li>
                    <span>01</span>
                    <p>All items frm previous pack</p>
                  </li>
                  <li>
                    <span>02</span>
                    <p>
                      Receive 5 Legion Concept Posters (1 for each Franchise)
                      signed by Lee Baker the screenwriter
                    </p>
                  </li>
                  <li>
                    <span>03</span>
                    <p>Receive 5 Legion T-shirts (1 for each Franchise)</p>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/bonus3.png"
                  alt="Legion 50 Pack icon"
                  width={65}
                  height={65}
                />
                <b>Legion 50 Pack</b>
                <ul>
                  <li>
                    <span>01</span>
                    <p>All from previous Packs</p>
                  </li>
                  <li>
                    <span>02</span>
                    <p>
                      Receive an opportunity for a CAMEO ROLE in one of the
                      films
                    </p>
                  </li>
                  <li>
                    <span>03</span>
                    <p>
                      Receive an invitation to attend a RED CARPET PREMIER
                      SCREENING for one of the films
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/bonus4.png"
                  alt="Legion 100 Pack icon"
                  width={65}
                  height={65}
                />
                <b>Legion 100 Pack</b>
                <ul>
                  <li>
                    <span>01</span>
                    <p>All from previous Packs</p>
                  </li>
                  <li>
                    <span>02</span>
                    <p>Receive a LEGION BITCOIN ORDINAL!</p>
                  </li>
                  <li>
                    <span>03</span>
                    <p>
                      Become a member of the LEGION ORDINALS ELITE INVESTMENT
                      CLUB!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.seize}>
            <div className={styles.wrapper}>
              <div className={styles.inner}>
                <b>
                  Seize this unparalleled opportunity to claim your very own,
                  exceptionally rare, limitededition treasure for 80 MATIC{" "}
                  <span>[$86 USD]</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
