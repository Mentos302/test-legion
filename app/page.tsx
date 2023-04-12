import { HeroSection } from "./sections/hero";
import { RaritySection } from "./sections/rarity";
import { TradingPartnerSection } from "./sections/trading-partners";
import { UniverseSection } from "./sections/universe";
import { VideoBonusSection } from "./sections/video-bonus";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <VideoBonusSection />
      <TradingPartnerSection />
      <UniverseSection />
      <RaritySection />
    </main>
  );
}
