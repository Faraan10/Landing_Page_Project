import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandGrid from "../components/BrandGrid";
import ProductCard from "../components/ProductCard";
import CarePlanBanner from "../components/CarePlanBanner";
import Bestsellers from "../components/BestSellers";
import HealthConcerns from "../components/HealthConcerns";
import InfoSection from "../components/InfoSection";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <BrandGrid />
      <ProductCard title="Features Products" cart={cart} />
      <CarePlanBanner />
      <Bestsellers />
      <HealthConcerns />
      <ProductCard title="Deal of the Day" cart={cart} />
      <InfoSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Home;
