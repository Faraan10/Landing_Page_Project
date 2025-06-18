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
import toast from "react-hot-toast";

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (newItem) => {
    // console.log(newItem);

    setCart((prevItems) => [...prevItems, newItem]);
    toast.success("Item added to cart!");
  };
  return (
    <div>
      <TopBar />
      <Navbar cart={cart} />
      <Hero />
      <BrandGrid />
      <ProductCard title="Features Products" addToCart={addToCart} />
      <CarePlanBanner />
      <Bestsellers />
      <HealthConcerns />
      <ProductCard title="Deal of the Day" addToCart={addToCart} />
      <InfoSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Home;
