import MenuButton from "@/components/menu-button";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

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
                <Link href="/">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    About
                  </a>
                </Link>
                <Link href="/assignment">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    Assignment
                  </a>
                </Link>
                <Link href="/help">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    Help
                  </a>
                </Link>
                <Link href="/playground">
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    Playground
                  </a>
                </Link>
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
          <Link href="/">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
              Home
            </a>
          </Link>

          <Link href="/about">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
              About
            </a>
          </Link>

          <Link href="/assignment">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
              Assignment
            </a>
          </Link>

          <Link href="/help">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
              Help
            </a>
          </Link>

          <Link href="/playground">
            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
              Playground
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
