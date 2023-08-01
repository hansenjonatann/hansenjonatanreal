import { React, useState } from "react";
import IconBars from "../Icons/Bars";
import { Link } from "react-scroll";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-primary  text-secondary py-4 px-10 md:px-16 w-screen overflow-hidden  text-xl sticky">
        <div>
          <h1 className="font-medium">Hansen Jonatan</h1>
        </div>
        <ul className=" hidden md:flex   ">
          <li>
            <Link
              to="home"
              smooth={true}
              className="px-4 py-2 transition duration-300 hover:underline"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              className="px-4 py-2 transition duration-300 hover:underline"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              className="px-4 py-2 transition duration-300 hover:underline"
            >
              Kontak
            </Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={handleToggle}>
          <IconBars />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
