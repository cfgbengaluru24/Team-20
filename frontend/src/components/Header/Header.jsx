import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const menuItems = [
  {
    name: "HOME",
    href: "#",
  },
  {
    name: "ABOUT US",
    href: "#",
  },
  {
    name: "PROJECTS",
    href: "#",
  },
  {
    name: "GALLERY",
    href: "#",
  },
  {
    name: "TESTIMONIALS",
    href: "#",
  },
  {
    name: "VOLUNTEERS",
    href: "#",
  },
  {
    name: "CONTACT",
    href: "#",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");

  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto flex w-full items-center justify-between lg:px-2">
      <div className="inline-flex justify-end space-x-2 w-1/3 mr-20">
        <img src={Logo} alt="Logo" />
      </div>
      <div
        className={`flex flex-col bg-black bg-opacity-10 backdrop-blur-md w-2/3 justify-start rounded pr-32 ${
          isScrolled ? "bg-[#041f45]" : ""
        } hidden md:block`}
      >
        <div className="flex justify-end mt-1">
          <Button text="DONATE NOW" />
        </div>
        <div className="flex justify-center">
          <ul className="inline-flex mt-4 mb-2 ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex justify-start text-md font-semibold text-white hover:bg-[#FF4D00] px-4 py-4 ease-in-out duration-500 rounded-md"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="ml-4">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="text-white bg-[#041f45] border border-white rounded-md px-2 py-1"
              >
                <option value="en">English</option>
                <option value="tel">Telugu</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative lg:hidden">
        <Menu
          onClick={toggleMenu}
          className="h-6 w-6 cursor-pointer text-[#FF4D00]"
        />
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2"></div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    ></button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4 ">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm bg-[#222222] border border-white font-semibold hover:bg-[#FF4D00]"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          {item.name}
                        </span>
                      </a>
                    ))}
                    <div className="mt-4">
                      <Button>
                        {" "}
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                        >
                          <option value="en">EN</option>
                          <option value="tel">TEL</option>
                        </select>
                      </Button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
