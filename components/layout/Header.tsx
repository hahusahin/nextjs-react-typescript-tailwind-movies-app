import Link from "next/link";
import React, { useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { HiViewList } from "react-icons/hi";
import SearchForm from "./SearchForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto px-8 xl:px-32 py-1.5">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center space-x-4">
              <SiThemoviedatabase size="2rem" />
              <span className="text-2xl font-semibold">Movies</span>
            </a>
          </Link>
          <SearchForm style="hidden md:flex justify-center" onCloseCollapsingBar={() => setIsOpen(false)}/>
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-xl">Home</a>
            </Link>
          </div>
          <button
            className="flex md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HiViewList size="2rem" />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4">
            <SearchForm style="flex justify-center" onCloseCollapsingBar={() => setIsOpen(false)}/>
            <Link href="/">
              <a className="text-xl">Home</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
