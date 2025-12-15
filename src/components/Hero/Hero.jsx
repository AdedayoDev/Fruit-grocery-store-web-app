import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import orangeLogo from "../../assets/orangebg.png";
import Navabar from "../Navbar/Navabar";
import { useState } from "react";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main className="w-full md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-162.5 bg-linear-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="w-10/12 mx-auto">
          {/* Navbar section */}
          <Navabar sidebar={sidebar} setSidebar={setSidebar} />

          {/* Hero sedtion */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-162.5">
            {/* Text Container */}
            <div className="text-white mt-25 md:mt-0 p-4 space-y-4 ">
              <h1 data-aos="fade-up" className="text-3xl md:pl-14">
                01_________
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-5xl font-bold uppercase text-shadow"
              >
                A Healthy Fruit
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aliquid eaque quasi cupiditate ullam ut odit, fugit, sapiente
                accusantium animi ducimus dolorum tempora illum minima. Impedit
                possimus deserunt perferendis magni?
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="0"
                className="secondary-btn"
              >
                Shop Now
              </button>
            </div>

            {/* Image Section */}
            <div data-aos="zoom-in">
              <img
                src={orangeLogo}
                alt="Orange Logo "
                className="relative z-10 w-100 img-shadow"
              />
            </div>

            {/* Blank div section */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* Background large Text */}
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="large-text"
        >
          Orange
        </h1>

        {/* Sidebr section */}

        {sidebar && (
          <div className="absolute top-0 right-0 w-30 h-full bg-linear-to-b from-primary to bg-secondary Z-10 transition ">
            <div className="w-full h-full flex justiify-center items-center ">
              <div className="text-white w-full h-full flex flex-col justify-center items-center gap-6 ">
                {/* line */}
                <div className="w-0.5 h-17.5 bg-white"></div>

                <div className="inline-block p-2 rounded-full cursor-pointer  border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer  border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer  border border-white">
                  <FaLinkedinIn className="text-2xl" />
                </div>

                {/* line */}
                <div className="w-0.5 h-17.5 bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
