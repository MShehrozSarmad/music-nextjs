import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSec from "@/components/HeroSec";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseus from "@/components/WhyChooseus";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSec/>
      <FeaturedCourses/>
      <WhyChooseus/>
      <TestimonialCards/>
      <UpcomingWebinars/>
    </main>
    </>
  );
}