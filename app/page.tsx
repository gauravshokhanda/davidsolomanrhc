import Hero from '@/components/homepage/Hero';
import ImageCarousel from '@/components/homepage/ImageCarousel';
import ThreePillars from '@/components/homepage/ThreePillars';
import CurrentProjects from '@/components/homepage/CurrentProjects';
import WaysToJoin from '@/components/homepage/WaysToJoin';
import JournalPreview from '@/components/homepage/JournalPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <ThreePillars />
      <CurrentProjects />
      <WaysToJoin />
      <JournalPreview />
    </>
  );
}