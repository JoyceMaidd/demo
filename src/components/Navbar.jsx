import React from 'react';

const Navbar = () => {
  return (
    <nav className="top-0 w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <a className="text-xl text-black dark:text-white" href="#">Cover Letter Generator</a>
      </div>
    </nav>
  );
}

export default Navbar;
