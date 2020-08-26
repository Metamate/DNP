import MenuButton from "@/components/menu-button";
import { APP_NAME } from "@/lib/constants";
import NavLink from "@/components/nav-link";
import NavLinkSmall from "@/components/nav-link-small";
import Link from "next/link";

export default function NavBar({ isOpen, setIsOpen }) {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <div className="flex-shrink-0 flex items-center space-x-2">
                  <img className="h-8 w-8" src="/favicon.ico" alt="Logo" />
                  <div className="text-white text-lg">{APP_NAME}</div>
                </div>
              </a>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavLink url="/">Home</NavLink>
                <NavLink url="/about">About</NavLink>
                <NavLink url="/assignment">Assignment</NavLink>
                <NavLink url="/help">Help</NavLink>
                <NavLink url="/playground">Playground</NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinkSmall url="/">Home</NavLinkSmall>
          <NavLinkSmall url="/about">About</NavLinkSmall>
          <NavLinkSmall url="/assignment">Assignment</NavLinkSmall>
          <NavLinkSmall url="/help">Help</NavLinkSmall>
          <NavLinkSmall url="/playground">Playground</NavLinkSmall>
        </div>
      </div>
    </nav>
  );
}
