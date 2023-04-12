"use client";

import { Button } from "../../components/button";
import { Header } from "../../components/header";

import styles from "./styles.module.scss";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useRef, useState } from "react";

export const SliderSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [sliderTouched, setSliderTouched] = useState(true);
  const swiperRef = useRef<any>();

  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.control}>
          <div className={styles.progress}>
            <div
              className={styles.current}
              style={{ width: (activeSlide / 4) * 100 + "%" }}
            ></div>
          </div>
          <div className={styles.arrows}>
            <div
              className={styles.prev}
              onClick={() => {
                setSliderTouched(true);
                swiperRef.current?.slidePrev();
              }}
            >
              <Image
                src="/icons/thin-arrow.svg"
                alt="Flag"
                width={55}
                height={15}
              />
            </div>
            <div
              className={styles.next}
              onClick={() => {
                setSliderTouched(true);
                swiperRef.current?.slideNext();
              }}
            >
              <Image
                src="/icons/thin-arrow.svg"
                alt="next"
                width={55}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={2.5}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
        // wrapperClass={styles.swiper_container}
      >
        <SwiperSlide>
          <div className={styles.primary}>
            <b>Experience matters</b>
            <p>
              An Academy Award winner and award winning film professionals who
              have worked on some of the highest grossing films of all time
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.secondary}>
            <Image
              src="/images/oscar.png"
              alt="Oscar"
              width={135}
              height={300}
            />
            <div>
              <b>Award Winners</b>
              <p>Award Winning Management Team.</p>
              slide.png
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.secondary}>
            <Image
              src="/images/grimm.png"
              alt="Oscar"
              width={230}
              height={230}
            />
            <div>
              <b>Television Experience</b>
              <p>Grimm, Trauma, Pushing Daisies, iZombie and more</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
