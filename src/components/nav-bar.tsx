import { NavLinks } from "./nav-links";

export const NavBar = () => {
  return (
    <nav className="fixed z-50 top-0 bg-[#282b2d] text-gray-50 shadow-sm content-center bg-opacity-100 h-[6%] w-[100%] lg:pr-[10px]">
      <NavLinks />
    </nav>
  );
};
