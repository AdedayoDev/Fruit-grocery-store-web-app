import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
      ease: "ease-in-cubic"
    })
  }, [])
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services/>
      <WhereToBuy/>
      <AppBanner />
      <Footer/>
    </main>
  );
}

export default App;
