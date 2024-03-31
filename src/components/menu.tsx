import { pushRotate as PushRotate } from "react-burger-menu";
import { navLinks } from "./nav-bar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface MenuProps {
  pageWrapId: string;
  outerContainerId: string;
}

const MenuButtons = ({ handleIsOpen }: { handleIsOpen: () => void }) =>
  [...Array.from(navLinks), ["Contact", "#contact"]].map(([label, href]) => (
    <Button
      key={label}
      className="mb-[2px] justify-center w-full text-primary h-[50px]"
      variant="outline"
      onClick={handleIsOpen}
      onFocus={handleIsOpen}
    >
      <a key={label} className="menu-item" href={href}>
        {label}
      </a>
    </Button>
  ));

export const Menu = ({ pageWrapId, outerContainerId }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PushRotate
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
      right
      isOpen={isOpen}
    >
      <MenuButtons handleIsOpen={handleIsOpen} />
    </PushRotate>
  );
};
