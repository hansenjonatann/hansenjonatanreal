import { Link } from "react-scroll";
import Bars from "../Icons/Bars";

const Navbar = () => {
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  const navMenu = document.querySelector("#nav-menu");

  const handleClick = () => {
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              hansenjonatan
            </a>
          </div>
          <div className="flex items center justify-center px-4">
            <button
              id="hamburger"
              onClick={() => handleClick()}
              className="lg:hidden"
            >
              <Bars />
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-5 lg:static lg:block lg:bg-transparent lg:shadow-none lg:rounded-none lg:max-w-full bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:cursor-pointer"
            >
              <ul className="block lg:flex lg:shadow-none lg:rounded-none">
              <li className="group">
                  <Link
                    to="home"
                    className="text-base text-dark py-2 mx-8  group-hover:text-primary"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="about"
                    className="text-base text-dark py-2 mx-8  group-hover:text-primary"
                  >
                    Tentang Saya
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="portfolio"
                    className="text-base text-dark py-2 mx-8  group-hover:text-primary"
                  >
                    Portfolio
                  </Link>
                </li>
                   <li className="group">
                  <Link
                    to="skills"
                    className="text-base text-dark py-2 mx-8  group-hover:text-primary"
                  >
                    Skills
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="blog"
                    className="text-base text-dark py-2 mx-8  group-hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="contact"
                    className="text-base text-dark py-2 mx-8  group-hover:text-primary"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
