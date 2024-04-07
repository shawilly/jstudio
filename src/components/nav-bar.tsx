import { NavLinks } from "./nav-links";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 h-[6%] w-[100%] content-center bg-[#282b2d] bg-opacity-100 text-gray-50 shadow-sm lg:pr-[10px]">
      <NavLinks />
    </nav>
  );
};
