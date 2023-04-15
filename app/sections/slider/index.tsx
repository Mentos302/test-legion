import styles from "./styles.module.scss";
import Image from "next/image";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Slider } from "../../components/slider";

export const SliderSection = () => {
  return (
    <section className={styles.root}>
      <Slider options={{ slidesPerView: 2.5, spaceBetween: 30 }}>
        <div className={styles.primary}>
          <div>
            <b>Experience matters</b>
            <p>
              An Academy Award winner and award winning film professionals who
              have worked on some of the highest grossing films of all time
            </p>
          </div>
        </div>
        <div className={styles.secondary}>
          <Image src="/images/oscar.png" alt="Oscar" width={135} height={300} />
          <div>
            <b>Award Winners</b>
            <p>Award Winning Management Team.</p>
          </div>
        </div>
        <div className={styles.secondary}>
          <Image
            src="/images/spider.png"
            alt="Spider man"
            width={250}
            height={250}
          />
          <div>
            <b>Game Experience</b>
            <p>Spiderman, G.I. Joe, Tenchu and more.</p>
          </div>
        </div>
        <div className={styles.secondary}>
          <Image
            src="/images/avatar.png"
            alt="Oscar"
            width={250}
            height={250}
          />
          <div>
            <b>Film Experience</b>
            <p>Avatar, Avengers, Superman, X-Men and more.</p>
          </div>
        </div>
        <div className={styles.secondary}>
          <Image src="/images/grimm.png" alt="Oscar" width={230} height={230} />
          <div>
            <b>Television Experience</b>
            <p>Grimm, Trauma, Pushing Daisies, iZombie and more</p>
          </div>
        </div>
      </Slider>
    </section>
  );
};
