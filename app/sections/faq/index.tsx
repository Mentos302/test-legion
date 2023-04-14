"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../../components/button";
import { useState } from "react";

const QUESTIONS = [
  {
    q: "Can I select which Legion Universe NFT I want?",
    a: `The Legion Universe NFTs are randomly generated and delivered, so you won't know which NFT you receive until the collection is revealed. The NFTs feature characters from the 5 initial film franchises in the Legion Universe, each with its own rarity.`,
  },

  {
    q: "How many Legion Universe NFTs can I purchase?",
    a: `We have not limited the number of NFTs you can purchase. We have set bonuses for purchasing packs of 10, 25, 50 and 100. See the description of bonus packs.`,
  },
  {
    q: "What is so special about the Legion Universe NFTs?",
    a: `These NFTs have been created to build the worldwide Legion Community. Your NFT is your VIP card which gives privileges in the productions, the creation and distribution of comic books and VIP privileges in the video games. It also gives you opportunities to attend events and to vote on selected creative aspects of the projects.`,
  },

  {
    q: "What is the Legion Trading Card Game in the Legion 10 Pack?",
    a: `We are creating a trading card game which will consist of physical trading cards. With this game you can battle other people with your favorite Legion Universe characters. Those who purchase 10 Legion Universe NFTs and get this first printing will receive trading cards that are unique as they will be the first printing of the Legion trading card game.`,
  },
  {
    q: "Why would I want to buy 50 Legion Universe NFTs (Legion 50 Pack) to get a Legion Ordinal?",
    a: `The Legion Ordinals are bitcoin NFTs. That means they are created on the bitcoin blockchain (a new process which is revolutionary in the NFT world). Holders of Legion Ordinals get all the privileges of holding a Legion Universe NFT and they also become members of the Legion Ordinals Elite Investment Club. This club is led by Cameron Curriden (in 2021 Cameron was listed as one of the top 40 under 40 professionals in the USA and he is actively involved in over $6.5 Billion in transactions). The Club features the following: 1 – Monthly calls with investment experts to discuss economic climate, deals and have dialogue for growth and protection of wealth. 2 – Access to highly exclusive Investments, Funds, Venture Capital, Film, Real Estate and more investment deals that are not generally available to the public. 3 – Get potential access to capital for deals and/or companies that make sense for our funds.`,
  },
  {
    q: "What are the projects the Legion Universe team worked on prior to the Legion Universe?",
    a: `Lee Baker, the creator of the Legion Universe has worked on Pushing Daisies, Race to Witch Mountain, Pushing Daisies, Grimm, Trauma, The Aquabats, Raising Hope, A Gifted Man, The Closer and iZombie. His video game credits include Advent Rising, G.I. Joe, Monopoly, Spiderman 2, Nerf, Stuart Little, and Pirates of the Caribbean. Jarom Sidwell, Head of Production for Legion Universe worked on Avatar, Man of Steel, Avengers, The Adventures of TinTin, X-Men: First Class, A-Team, Gulliver’s Travels, Transformers, We Own the Night, The Hitcher, Texas Chainsaw Massacre—The Beginning and Zoom. Augustine Kim, Business Development and Distribution for Legion Universe, worked on distribution of over 300 motion pictures and TV series including Once Upon A Time in America, Never Say Never Again, The Killing Fields, Night Game, Platoon, Witness, Endless Love, Nightmare on Elm Street, Beverly Hills Cop, Moon Walker, Cotton Club, Apocalypse Now, LA Confidential, El Salvador, The Fugitive and The Empire of the Sun, Wild Wild World Animals, Samuel Goldwyn’s package, Hercules’s series, The Six Million Dollar Man, Combat and more. Keith Merrill, Director and Producer, directed over 20 feature films including Windwalkers, Amazon, 12 Dogs of Christmas, Broken Hill, Alamo: the Price of Freedom and many more, and also directed many television shows including The Wild West, Mr. Krueger’s Christmas, The Magical World of Disney and others.`,
  },
  {
    q: "What are the film and television awards earned by the Legion Universe team members?",
    a: `Keith Merrill won an Academy Award for his film The Great American Cowboy. Lee Baker and his company was the recipient of 10 Telly Awards, 2 Davey Awards, 2 W3 Awards, 15 Horizon Awards, 5 Communicator Awards and 6 Interactive Media Awards.`,
  },
  {
    q: "What is the refund policy?",
    a: `All sales of Legion Universe NFTs are final.`,
  },
  {
    q: "How many different Legion Universe NFTs are there?",
    a: `There is a maximum of 40,000 Legion Universe NFTs. They are being released in tranches of 10000.`,
  },
];

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (index === activeIndex) return setActiveIndex(null);

    setActiveIndex(index);
  };

  return (
    <div className={styles.root}>
      <h2 className="gradient">FAQ</h2>
      <div className={styles.inner}>
        {QUESTIONS.map((question, i) => (
          <div onClick={() => handleClick(i)} className={styles.item} key={i}>
            <div>
              <b>{question.q}</b>
              <Image
                src="/icons/faq-close.svg"
                alt="Flag"
                width={15}
                height={15}
                style={{
                  transition: "0.3s ease all",
                  transform: activeIndex === i ? "rotate(45deg)" : "",
                }}
              />
            </div>
            <p style={{ display: activeIndex === i ? "block" : "none" }}>
              {question.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
