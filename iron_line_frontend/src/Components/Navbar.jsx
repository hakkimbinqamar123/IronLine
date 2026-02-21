import React, { useState } from "react";
import logo from "../assets/Images/logo1.webp";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition
     ${isActive ? "bg-[#0F2A44]/10 text-[#0F2A44]" : "hover:bg-gray-100"}`;

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Iron Line" className="h-11 md:h-12 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
            <NavLink to="/operations" className={linkClass}>Operations</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/subsidiary" className={linkClass}>Subsidiary</NavLink>
            <NavLink to="/news" className={linkClass}>News and Media</NavLink>
          </nav>

          {/* Desktop CTA */}
          <NavLink
            to="/contacts"
            className="hidden md:inline-block bg-[#173E73] hover:bg-white hover:text-[#173E73]
                       border border-[#173E73] px-4 py-2 rounded-md text-white text-sm font-medium transition"
          >
            Get in Touch
          </NavLink>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-6 h-0.5 bg-black transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-black transition ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-black transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </div>

      {/* Small Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute right-4 top-16 w-64 bg-white rounded-xl shadow-xl border animate-in fade-in zoom-in-95">
          <div className="p-4 space-y-1 text-sm font-medium">

            <NavLink to="/about-us" onClick={closeMenu} className={linkClass}>
              About Us
            </NavLink>

            <NavLink to="/operations" onClick={closeMenu} className={linkClass}>
              Operations
            </NavLink>

            <NavLink to="/services" onClick={closeMenu} className={linkClass}>
              Services
            </NavLink>

            <NavLink to="/subsidiary" onClick={closeMenu} className={linkClass}>
              Subsidiary
            </NavLink>

            <NavLink to="/news" onClick={closeMenu} className={linkClass}>
              News and Media
            </NavLink>

            <div className="pt-3">
              <NavLink
                to="/contacts"
                onClick={closeMenu}
                className="block text-center bg-[#173E73] text-white py-2 rounded-md"
              >
                Get in Touch
              </NavLink>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
