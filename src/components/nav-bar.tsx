import { NavLinks } from "./nav-links";

export const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black text-white hover:bg-grey shadow-sm content-center bg-opacity-100 h-[45px]">
      <NavLinks />
    </nav>
  );
};
