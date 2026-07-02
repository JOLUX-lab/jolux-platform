import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <DashboardPreview />
    </>
  );
}