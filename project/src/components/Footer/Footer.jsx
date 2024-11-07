import React from "react";
import FooterLogo from "../../assets/logo.png";
import { FaFacebook, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-8">
            <h1 className="flex items-center gap-3 text-xl sm:text-4xl font-bold text-justify sm:text-left">
              <img src={FooterLogo} alt="Logo" className="max-h-[60px]" />
              <span>MASADYA Travel & Tours</span>
            </h1>
            <div className="flex items-center gap-3 mt-6 text-base">
              <FaLocationArrow />
              <p>
                Don P. Campos Ave.,Corner I, Mangubat St Brgy. Zone IV
                Dasmarinas Cavite, Dasmariñas, Philippines
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-lg">
              <FaMobileAlt />
              <p>0915 346 4741</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/masadyatravelandtours">
                <FaFacebook className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center ">
            <div className="py-8 px-4">
              <h1 className="text-3xl font-bold text-center mb-3">
                Important Links
              </h1>
              <ul className="flex gap-6 justify-center">
                {FooterLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:translate-y-[-2px] duration-300 hover:text-primary text-gray-700 dark:text-gray-200 text-2xl"
                  >
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                      <span>&#11162;</span>
                      <span className="ml-1">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
