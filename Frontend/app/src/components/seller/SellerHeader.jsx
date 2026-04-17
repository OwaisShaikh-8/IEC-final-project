import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profileActions } from "../../constants/seller/header/NavItems";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";



const SellerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="w-full bg-white/60 shadow-md fixed top-0 left-0 z-50 text-secondary backdrop-blur">
      <div className="container px-4 py-3 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">Seller Panel</h1>

          <div className="hidden md:flex capitalize font-medium text-md gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="relative">
            <Avatar
              className="cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <AvatarImage src="" />
              <AvatarFallback>OS</AvatarFallback>
            </Avatar>

            {/* Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl p-2">
                {profileActions.map((action, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 ${
                      action.isDestructive ? "text-red-500" : ""
                    }`}
                  >
                    {action.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-4 text-center">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-primary">
              {link.name}
            </a>
          ))}

          <hr />

          {profileActions.map((action, index) => (
            <button
              key={index}
              className={`py-2 rounded-lg hover:bg-gray-100 ${
                action.isDestructive ? "text-red-500" : ""
              }`}
            >
              {action.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerHeader;