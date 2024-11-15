import AboutComponent from "@/components/About";
import ContactComponent from "@/components/Contact";
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import HeroComponent from "@/components/Hero";

export default function Home() {
  return (
    <>
    <HeaderComponent />
    <HeroComponent />
    <AboutComponent />
    <ContactComponent />
    <FooterComponent />
    </>
    
  );
}
