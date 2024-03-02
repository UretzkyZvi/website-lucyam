// import { CallToAction } from '@/components/CallToAction'
// import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { Reviews } from '@/components/Reviews'
// import { SecondaryFeatures } from '@/components/SecondaryFeatures'
 
import { Metadata } from 'next';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';

export const metadata: Metadata = {
    title: 'Main',
  }
export default function Home() {
  return (
    <>
   
      <Hero />
      <PrimaryFeatures />
      {/* 
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <Pricing />
      <Faqs /> */}
    </>
  )
}
