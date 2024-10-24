import AboutYou from "@/components/AboutYou/AboutYou";
import Describe from "@/components/Describe/Describe";
import FAQComponent from "@/components/FAQ/FAQComponent";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowProductWorks from "@/components/HowProductWorks/HowProductWorks";
import InfoBanner from "@/components/InfoBanner/InfoBanner";
import Reviews from "@/components/Reviews/Reviews";
import "@/styles/globals.css";
import CommentHeroSection from "@/ui/comment";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative">
        <HeroSection />

        <div className="absolute -bottom-[190px] left-[90px]">
          <CommentHeroSection />
        </div>
      </div>
      {/* <Describe />
      <AboutYou />
      <HowProductWorks />
      <Reviews />
      <FAQComponent />
      <InfoBanner />
      <Footer /> */}
    </div>
  );
}
