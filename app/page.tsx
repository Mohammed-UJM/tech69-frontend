import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import RepairSearchForm from "@/components/sections/RepairSearchForm";
import Products from "@/components/sections/Products";
import HomeSections from "@/components/sections/OtherSections";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RepairSearchForm />
      <Products />
      <HomeSections />
      <Contact />
    </>
  );
}
