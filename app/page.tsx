import { Footer } from "./components/footer";
import { HeroSection } from "./sections/hero";
import { HowToMintSection } from "./sections/how-to-mint";
import { RaritySection } from "./sections/rarity";
import { RoadmapSection } from "./sections/roadmap";
import { SliderSection } from "./sections/slider";
import { TeamSection } from "./sections/team";
import { TradingPartnerSection } from "./sections/trading-partners";
import { UniverseSection } from "./sections/universe";
import { VideoBonusSection } from "./sections/video-bonus";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SliderSection />
        <VideoBonusSection />
        <TradingPartnerSection />
        <UniverseSection />
        <RaritySection />
        <TeamSection />
        <RoadmapSection />
        <HowToMintSection />
      </main>
      <Footer />
    </>
  );
}
