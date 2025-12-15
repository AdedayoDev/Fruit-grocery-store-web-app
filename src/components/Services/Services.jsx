import { useEffect } from "react";
import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesData = [
  {
    id: 1,
    image: Fruits1,
    title: "Fresh Fruits",
    subtitles:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit accusamus magni quas error repudiandae.",
    aosDelay: "300",
  },
  {
    id: 2,
    image: Fruits2,
    title: "Fresh Fruits",
    subtitles:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit accusamus magni quas error repudiandae.",
    aosDelay: "500",
  },
  {
    id: 3,
    image: Fruits3,
    title: "Orange Juice",
    subtitles:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit accusamus magni quas error repudiandae.",
    aosDelay: "700",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // animation replays
    });
  }, []);

  return (
    <section className="w-10/12 mx-auto my-16 space-y-8">
      {/* Header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-dark">
          Fresh and Tasty <span className="text-primary">Fruits</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus
          dignissimos, odit tempore saepe odio esse dolorem laboriosam adipisci
          possimus.
        </p>
      </div>

      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServicesData.map(({ id, image, title, subtitles, aosDelay }) => (
          <div
            key={id}
            data-aos="fade-up"
            data-aos-delay={aosDelay}
            className="space-y-4 text-center"
          >
            <img
              src={image}
              alt={title}
              className="mx-auto max-w-50  hover:scale-110 duration-300 img-shadow2 h-48 object-contain"
            />
            <h3 className="text-lg text-primary font-semibold">{title}</h3>
            <p className="text-sm  text-dark opacity-70">{subtitles}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
