import Image from "next/image";
import styles from "./styles.module.scss";
import { Slider } from "../../components/slider";

export const TeamSection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.team}>
          <div className={styles.member}>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Image
                src="/images/team.png"
                alt="Bell icon"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <b className={styles.title}>Team</b>
          </div>
          <div className={styles.member}>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Image
                src="/bgs/team.svg"
                alt="Bell icon"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.inner}>
              <div className={styles.header}>
                <Image
                  src="/images/team1.png"
                  alt="Lee Baker"
                  width={120}
                  height={120}
                />
                <div className={styles.meta}>
                  <div className={styles.links}>
                    <a href="#">
                      <Image
                        src="/icons/imdb.svg"
                        alt="Imdb"
                        width={33}
                        height={33}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={33}
                        height={33}
                      />
                    </a>
                  </div>
                  <b>Lee Baker</b>
                  <span>President/CEO</span>
                </div>
              </div>
              <ul className={styles.about}>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                  />
                  <span>Former owner/president of Sandman Studios.</span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Film & TV Credits include Race to Witch Mountain, Pushing
                    Daisies, Grimm, Trauma, The Aquabats, Raising Hope, A Gifted
                    Man, The Closer, iZombie.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Video game credits: Advent Rising, G.I. Joe, Monopoly,
                    Stuart Little, & Pirates of the Caribbean.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Team recipient of 10 Telly Awards, 2 Davey Awards, 2 W3
                    Awards, 15 Horizon Awards, 5 Communicator Awards and 6
                    Interactive Media Awards.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.member}>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Image
                src="/bgs/team.svg"
                alt="Bell icon"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.inner}>
              <div className={styles.header}>
                <Image
                  src="/images/team2.png"
                  alt="Jarom Sidwell"
                  width={120}
                  height={120}
                />
                <div className={styles.meta}>
                  <div className={styles.links}>
                    <a href="#">
                      <Image
                        src="/icons/imdb.svg"
                        alt="Imdb"
                        width={33}
                        height={33}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={33}
                        height={33}
                      />
                    </a>
                  </div>
                  <b>Jarom Sidwell</b>
                  <span>Head of Production</span>
                </div>
              </div>
              <ul className={styles.about}>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Career credits include work on Avatar, Man of Steel,
                    Avengers, The Adventures of TinTin, X-Men: First Class,
                    A-Team, Gulliver’s Travels, Transformers, We Own the Night,
                    The Hitcher, Texas Chainsaw Massacre—The Beginning and Zoom.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>Produced VFX commercials at Radium/Reel FX.</span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Currently leading Advent FX teams and perfecting use of
                    Virtual and Augmented Reality.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.member}>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Image
                src="/bgs/team.svg"
                alt="Bell icon"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.inner}>
              <div className={styles.header}>
                <Image
                  src="/images/team3.png"
                  alt="Cameron Curriden"
                  width={120}
                  height={120}
                />
                <div className={styles.meta}>
                  <div className={styles.links}>
                    <a href="#">
                      <Image
                        src="/icons/imdb.svg"
                        alt="Imdb"
                        width={33}
                        height={33}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={33}
                        height={33}
                      />
                    </a>
                  </div>
                  <b>Cameron Curriden</b>
                  <span>Chief Financial Officer</span>
                </div>
              </div>
              <ul className={styles.about}>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    In 2020, Cameron was nominated for the Top 100 people in
                    Finance and in 2021 he was listed as the top 40 under 40
                    professionals in the US.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    He built a real estate company from scratch to multimillion
                    dollar valuation in 18 months.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Actively involved in over $6.5 Billion in transactions.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Founded and exited 3 companies and also has invested in and
                    has sat on the advisory boards for multiple startup
                    companies in the tech, entertainment and digital securities
                    space.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.member}>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Image
                src="/bgs/team.svg"
                alt="Bell icon"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.inner}>
              <div className={styles.header}>
                <Image
                  src="/images/team4.png"
                  alt="Keith Merrill"
                  width={120}
                  height={120}
                />
                <div className={styles.meta}>
                  <div className={styles.links}>
                    <a href="#">
                      <Image
                        src="/icons/imdb.svg"
                        alt="Imdb"
                        width={33}
                        height={33}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={33}
                        height={33}
                      />
                    </a>
                  </div>
                  <b>Keith Merrill</b>
                  <span>President/CEO</span>
                </div>
              </div>
              <ul className={styles.about}>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Academy Award Winner: Keith won the Academy Award for his
                    film The Greatest American Cowboy.
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Directed over 20 feature films including Windwalkers,
                    Amazon, 12 Dogs of Christmas, Broken Hill, Alamo: the Price
                    of Freedom and many more…
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Directed many television shows including The Wild West, Mr.
                    Krueger’s Christmas, The Magical World of Disney and others…
                  </span>
                </li>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="Benefit icon"
                    width={9}
                    height={9}
                  />
                  <span>Published author and has written many novels.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.member}>
            <div
              style={{ width: "100%", height: "600px", position: "relative" }}
            >
              <Image
                src="/bgs/team.svg"
                alt="Bell icon"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.inner}>
              <div className={styles.header}>
                <Image
                  src="/images/team5.png"
                  alt="Augustine Kim"
                  width={120}
                  height={120}
                />
                <div className={styles.meta}>
                  <div className={styles.links}>
                    <a href="#">
                      <Image
                        src="/icons/imdb.svg"
                        alt="Imdb"
                        width={33}
                        height={33}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={33}
                        height={33}
                      />
                    </a>
                  </div>
                  <b>Augustine Kim</b>
                  <span>Business Development/Distribution</span>
                </div>
              </div>
              <ul className={styles.about}>
                <li>
                  <Image
                    src="/icons/team-star.svg"
                    alt="icon"
                    width={9}
                    height={9}
                  />
                  <span>
                    Distribution of over 300 motion pictures and TV series
                    including Once Upon A Time in America, Never Say Never
                    Again, The Killing Fields, Night Game, Platoon, Witness,
                    Endless Love, Nightmare on Elm Street, Beverly Hills Cop,
                    Moon Walker, Cotton Club, Apocalypse Now, LA Confidential,
                    El Salvador, The Fugitive and The Empire of the Sun, Wild
                    Wild World Animals, Samuel Goldwyn’s package, Hercules’s
                    series, The Six Million Dollar Man, Combat and more.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Slider options={{ spaceBetween: 70, slidesPerView: 1.5 }}>
        <div className={`${styles.slide} ${styles.title_slide}`}>
          <h2 className="gradient">THE UNIVERSE</h2>
          <p>
            We have created a new Super-Powered Universe with an initial 5
            feature films. We plan to grow and expand like the Marvel Universe
            and bring this new Universe to theater screens, computer screens,
            tablet screens and to your phone. Join us as we create the films,
            video games, comic books, novels, augmented reality, virtual
            reality, NFTs and step into the metaverse!
          </p>
        </div>
        <div className={`${styles.slide} ${styles.common_slide}`}>
          <Image
            src="/images/universe1.png"
            alt="Spider man"
            width={210}
            height={310}
            style={{ objectFit: "contain" }}
          />
          <div>
            <b>Powers of the past</b>
            <p>
              Bree Powers, a teenager, is struck by lightning and goes into a
              coma. Two days later she wakes in a hospital bed, but has been
              living the life of an ancient magic user’s apprentice for many
              years. Her connection to the apprentice brings magic back and
              dangers the world has not faced for over 4000 years.
            </p>
          </div>
        </div>
        <div className={`${styles.slide} ${styles.common_slide}`}>
          <Image
            src="/images/universe1.png"
            alt="Spider man"
            width={210}
            height={310}
            style={{ objectFit: "contain" }}
          />
          <div>
            <b>Powers of the past</b>
            <p>
              Bree Powers, a teenager, is struck by lightning and goes into a
              coma. Two days later she wakes in a hospital bed, but has been
              living the life of an ancient magic user’s apprentice for many
              years. Her connection to the apprentice brings magic back and
              dangers the world has not faced for over 4000 years.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};
