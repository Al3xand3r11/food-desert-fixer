import Map from "./componnents/Map";
import Mission from "./componnents/Mission";
import Hero from "./componnents/Hero";
import Navbar from "./componnents/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Map/>
      <Mission/>
    </>
  );
}
