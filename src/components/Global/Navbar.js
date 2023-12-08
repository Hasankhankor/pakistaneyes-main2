import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleToggle = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="bg-black md:bg-white py-5">
      <div className="container mx-auto items-center justify-between">
        <div onClick={handleToggle}>
          <AiOutlineMenu
            className={`show text-white fw-bold text-2xl md:hidden ${
              isNavbarVisible ? "hidden" : ""
            }`}
          />
        </div>

        <AiOutlineClose
          onClick={handleToggle}
          className={`absolute left-0 top-10 text-white fw-bold text-2xl md:hidden ${
            isNavbarVisible ? "" : "hidden"
          }`}
        />

        <nav className={`bg-gray-800 ${isNavbarVisible ? "block" : "hidden md:block"}`}>
          <ul className="text-white md:flex flex-col sm:flex-row gap-2 sm:gap-8">
            <NavItem
              label="پہلا صفحہ"
              link="/"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="بین اقوامی"
              link="/Urdu/Categories/بین اقوامی"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="کھیل"
              link="/Urdu/Categories/کھیل"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="خطوط"
              link="/Urdu/Categories/خطوط"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="کاروبار"
              link="/Urdu/Categories/کاروبار"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="نوجوان"
              link="/Urdu/Categories/نوجوان"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="تفریحات"
              link="/Urdu/Categories/تفریحات"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="طرز زندگی"
              link="/Urdu/Categories/طرز زندگی"
              activeLink={activeLink}
              onClick={handleClick}
            />
            <NavItem
              label="صفحات"
              link="/Urdu/Categories/صفحات"
              activeLink={activeLink}
              onClick={handleClick}
            />
          </ul>

        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ label, link, activeLink, onClick }) => {
  const isActive = link === activeLink;

  return (
    <li
      onClick={() => onClick(link)}
      className={`${
        isActive ? "border-b-4 bg-blue-500 p-3" : "hover:boder-b-4 hover:ease-in p-3"
      }`}
    >
      <Link href={link}>{label}</Link>
    </li>

  );
};

export default Navbar;
