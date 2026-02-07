import { Hero } from "@/components/sections/hero";
import { ValueProposition } from "@/components/sections/value-proposition";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUs } from "@/components/sections/why-us";
import { Reviews } from "@/components/sections/reviews";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ValueProposition />
      <FeaturedWork />
      <ServicesOverview />
      <WhyUs />
      <Reviews />
      <CTA />
      <FAQ />
    </main>
  );
}
