import { useMediaQuery } from "@uidotdev/usehooks";

import CV from "../../icons/cv.svg";
import Github from "../../icons/github.svg";
import Linkedin from "../../icons/linkedin.svg";
import RhasoldyLogo from "../../icons/rhasoldy.svg";

const Navbar = () => {
  const links = [
    { href: "/#Work", label: "Work" },
    { href: "/#Skills", label: "Skills" },
    { href: "/#Blog", label: "Blog" },
  ];

  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <nav className="lg:px-176 flex items-center justify-between px-8 py-4 ">
      <a href="/" aria-label="home link">
        <img src={RhasoldyLogo.src} alt="logo" />
      </a>
      {!isTablet && (
        <ul className="flex items-center gap-12">
          {links.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <ul className="flex gap-4">
            <a href="/" aria-label="github link">
              <img src={Github.src} alt="github logo" />
            </a>
            <a href="/" aria-label="linkedin link">
              <img src={Linkedin.src} alt="linkedin logo" />
            </a>
            <a href="/" aria-label="cv link">
              <img src={CV.src} alt="cv logo" />
            </a>
          </ul>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
