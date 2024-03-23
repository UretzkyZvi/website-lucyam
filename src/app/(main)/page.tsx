// import { CallToAction } from '@/components/CallToAction'
// import { Faqs } from '@/components/Faqs'
import { Hero } from "@/components/Hero";
// import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { Reviews } from '@/components/Reviews'
// import { SecondaryFeatures } from '@/components/SecondaryFeatures'

import { Metadata } from "next";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Integrations } from "@/components/Integrations";
import { MarketResearch } from "@/components/MarketReasearch";
import { AboutUs } from "@/components/AboutUs";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <Integrations />
      <MarketResearch />
      <AboutUs />
      <ContactUs />
    </>
  );
}
