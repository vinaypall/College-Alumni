import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { assets } from "../assets";
import { Bell } from "lucide-react";
import { BellDot } from "lucide-react";
import Button from "./Button";

const NavBar = ({ Name, Role }) => {
  const navigate = useNavigate();
  const [login, isLogin] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(Name);
  const [role, setRole] = useState(Role);
  console.log(name, role);
  useEffect(() => {
    setName(Name);
    setRole(Role);
  }, [Name, Role]);

  const navLinks = [
    { name: "Career", href: "/career" },
    { name: "Connect Alumni", href: "#alumni" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "Demo", href: "#demo" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex 2xl:px-20 justify-between items-center mx-auto w-full px-5 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={assets.logo}
            className="h-10 w-10 sm:h-12 sm:w-12"
            alt="Logo"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-blue-400">
            AlumniConnect
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 ml-2">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Log In
            </Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
              <Button
                variant="ghost"
                className="w-full justify-center"
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
              >
                Log In
              </Button>
              <Button
                className="w-full justify-center"
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
