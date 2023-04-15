"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

type Options = Partial<{
  spaceBetween: number;
  slidesPerView: number;
}>;

export const Slider = ({
  children,
  options,
}: {
  children: React.ReactNode[];
  options?: Options;
}) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const swiperRef = useRef<any>();

  if (typeof window !== "undefined") {
    const halfContainer = (window.innerWidth - 1320) / 2;

    return (
      <>
        <div className="container">
          <div className={styles.control}>
            <div className={styles.progress}>
              <div
                className={styles.current}
                style={{ width: (activeSlide / children.length) * 100 + "%" }}
              ></div>
            </div>
            <div className={styles.arrows}>
              <div
                className={styles.prev}
                onClick={() => {
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
          spaceBetween={options && options.spaceBetween}
          slidesPerView={options && options.slidesPerView}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          style={{ paddingLeft: halfContainer + `px` }}
          onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {children.map((child, i) => (
            <SwiperSlide key={i}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  } else {
    return <></>;
  }
};
