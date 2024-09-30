import Map from "./componnents/Map";
import Mission from "./componnents/Mission";
import Hero from "./componnents/Hero";
import Navbar from "./componnents/Navbar";
import Footer from "./componnents/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Map/>
      <Mission/>
      <Footer/>
    </div>
  );
}
