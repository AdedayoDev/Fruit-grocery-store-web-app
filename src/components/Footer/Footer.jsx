import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-primary to-secondary pt-32 pb-8 text-white">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {/* company details section */}
          <div data-aos="fade-up" className="space-y-6 ">
            <h1 className="text-4xl font-bold">Ornage Mint</h1>
            <p className="dark text-sm max-w-75">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, dignissimos excepturi nobis veritatis ducimus,
              cupiditate et aspernatur placeat consequatur nam eum. Esse
              sapiente error totam quod fuga nostrum aliquid nobis?
            </p>
          </div>

          {/* Link section */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-6">
            <h1 className="text-4xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column Link */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Search Fruits</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              {/* second column Link */}
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Search Fruits</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* social links section */}
          <div data-aos="fade-up" data-aos-delay="500" className="space-y-6">
            <h1 className="text-4xl font-bold">Follow us</h1>
            <div>
              <p>+(234) 810 700 6660</p>
              <p>Noida, Utter Pradesh</p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 transition ease-in-out" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 transition ease-in-out" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 transition ease-in-out" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300 transition ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
