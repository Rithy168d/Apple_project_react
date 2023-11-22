import { Menu, X } from "lucide-react";
import logo from "../assets/logo-apple.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Products",
    path: "/products",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <nav className="container-width">
        <img src={logo} alt="logo img" className="img-logo" />
        <button onClick={() => setIsOpen(!isOpen)} className="btn-toggle">
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul className={isOpen ? "nav-list active" : "nav-list"}>
          {links.map((l) => (
            <li onClick={() => setIsOpen(false)} key={l.label}>
              <Link to={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
