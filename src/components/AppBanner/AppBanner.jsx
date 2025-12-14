import bannerImg from "../../assets/website/banner.jpg";
import PlaystoreImg from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { use, useEffect } from "react";

const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const AppBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      ease: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="w-10/12 mx-auto my-14">
        <div
          style={bannerStyle}
          className="sm:min-h-100 sm:flex sm:justify-end sm:items-center rounded-xl"
        >

          <div >
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="tex-2xl text-center sm:text-4xl font-semibold">
                Download the app
              </h1>

              <p
                data-aos="fade-up"
                data-aos-Delat="300"
                className="text-center sm:px-20"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                vitae, optio a voluptate natus aperiam. Hic non quia cum
                adipisci corporis reprehenderit dicta doloremque expedita!
              </p>

              {/* Image link */}
              <div className="flex justify-center items-center gap-4">
                <a href="#">
                    <img src={PlaystoreImg} alt=""  className="max-w-37 sm:max-w-30 md:max-w-50"/>
                </a>
                <a href="#">
                    <img src={AppStoreImg} alt="" className="max-w-37 sm:max-w-30 md:max-w-50" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
