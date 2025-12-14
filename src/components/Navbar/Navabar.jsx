
import { GiHamburgerMenu } from "react-icons/gi";

const Navabar = ({ sidebar, setSidebar }) => {
  return (
    <section className="w-full absolute top-0 left-0 py-2 text-white z-20">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-center">
            
          {/* Logo Section */}
          <h1 className="text-4xl font-bold uppercase">
            Orange <span className="font-normal text-2xl "></span>
          </h1>

          {/* Navlinks section */}
          <ul className="space-x-4 lg:flex hidden text-xl ">
            <li><a href="#">Home</a></li>
            <li><a href="#">Where to find</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* Hamburger */}
          <div onClick={() =>  setSidebar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer "/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navabar;
