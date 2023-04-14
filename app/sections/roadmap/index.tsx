import Image from "next/image";
import styles from "./styles.module.scss";

export const RoadmapSection = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className="gradient">Roadmap</h2>
          <ul className={styles.phases}>
            <li className={styles.phase}>
              <b>2015-2023</b>
              <ul>
                <li>
                  <div>
                    <Image
                      src="/icons/roadmap-star.svg"
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <span>
                    Development of feature films and screenplays for LEGION
                    UNIVERSE
                  </span>
                </li>
              </ul>
            </li>
            <li className={styles.phase}>
              <b>2023</b>
              <ul>
                <li>
                  <div>
                    <Image
                      src="/icons/roadmap-star.svg"
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <span>
                    Launch NFT project to build Worldwide Legion Community
                  </span>
                </li>
                <li>
                  <div>
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>Start PHASE I of LEGION UNIVERSE</span>
                </li>
                <li>
                  <div>
                    {" "}
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>Create Legion Trading Card Game</span>
                </li>
                <li>
                  <div>
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>Create initial Comic Books</span>
                </li>
                <li>
                  <div>
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>
                    Start production of SPEED OF LIGHT and POWERS OF THE PAST
                  </span>
                </li>
                <li>
                  <div>
                    {" "}
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>
                    Start LEGION EPIC and LEGION CHAMPIONS video games
                  </span>
                </li>
              </ul>
            </li>
            <li className={styles.phase}>
              <b>2024</b>
              <ul>
                <li>
                  <div>
                    {" "}
                    <Image
                      src="/icons/roadmap-star.svg"
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <span>
                    Launch LEGION EPIC and LEGION CHAMPIONS video games
                  </span>
                </li>
                <li>
                  <div>
                    {" "}
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>Release SPEED OF LIGHT and POWERS OF THE PAST</span>
                </li>
                <li>
                  <div>
                    {" "}
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>
                    Start production of LEGION, QUENTIN HOLLOW and DISCOVERY
                  </span>
                </li>
              </ul>
            </li>
            <li className={styles.phase}>
              <b>2024</b>
              <ul>
                <li>
                  <div>
                    <Image
                      src="/icons/roadmap-star.svg"
                      alt="icon"
                      width={15}
                      height={15}
                    />
                  </div>
                  <span>Release LEGION, QUENTIN and DISCOVERY</span>
                </li>
                <li>
                  <div>
                    {" "}
                    <Image
                      src="/icons/white-star.svg"
                      alt="icon"
                      width={7}
                      height={7}
                    />
                  </div>
                  <span>Start PHASE II of LEGION UNIVERSE</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
