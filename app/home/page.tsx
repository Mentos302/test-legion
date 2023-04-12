import { HeroSection } from "./sections/hero";
import { RaritySection } from "./sections/rarity";
import { SliderSection } from "./sections/slider";
import { TradingPartnerSection } from "./sections/trading-partners";
import { UniverseSection } from "./sections/universe";
import { VideoBonusSection } from "./sections/video-bonus";

export const Home = () => {
  return (
    <main>
      <HeroSection />
      {/* <SliderSection /> */}
      <VideoBonusSection />
      <TradingPartnerSection />
      <UniverseSection />
      <RaritySection />
    </main>
  );
};
