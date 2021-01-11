import Link from "next/link";
//import Image from "next/image"

export default function Header() {
  return (
    <header class="text-gray-700 bg-white border-t border-b body-font">
      <div class="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row max-w-5xl">
        <a class="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Link href="/">
            <a aria-label="RegReSir">
              <div className="container flex justify-center h-12 md:object-left" >
              <img src="/logo.png" width="400px" height="100%" objectFit="contain" />
                </div>

            </a>
          </Link>
        </a>
        <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a
            href="/about"
            class="mr-5 text-sm font-semibold text-red-600 hover:text-red-900"
          >
            About
          </a>
          <a
            href="/work-packages"
            class="mr-5 text-sm font-semibold text-red-600 hover:text-red-900"
          >
            Work Packages
          </a>
          <a
            href="#"
            class="mr-5 text-sm font-semibold text-red-600 hover:text-red-900"
          >
            Publications
          </a>
          <a
            href="#"
            class="mr-5 text-sm font-semibold text-red-600 hover:text-red-900"
          >
            Upcoming Events
          </a>
        </nav>
        <button class="items-center px-8 py-3 mt-4 font-semibold text-primary transition duration-500 ease-in-out transform bg-white border rounded-lg lg:inline-flex lg:mt-px hover:border-blue-800 hover:bg-primary hover:text-white focus:ring focus:outline-none">
          Newsletter
        </button>
      </div>
    </header>
  );
}
