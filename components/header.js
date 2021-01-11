import Link from "next/link";
import Image from "next/image"



function TailwindLogo({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 285 33">
      <path
        fill="#16BDCA"
        fillRule="evenodd"
        d="M27.5 0c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72 2.697 2.737 5.817 5.905 12.633 5.905 7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72C37.436 3.166 34.316 0 27.5 0zM13.75 16.5c-7.333 0-11.917 3.667-13.75 11 2.75-3.667 5.958-5.042 9.625-4.125 2.092.523 3.587 2.04 5.242 3.72C17.564 29.834 20.684 33 27.5 33c7.333 0 11.917-3.667 13.75-11-2.75 3.667-5.958 5.042-9.625 4.125-2.092-.523-3.587-2.04-5.242-3.72-2.697-2.738-5.817-5.905-12.633-5.905z"
        clipRule="evenodd"
      />
      <path
        fill="#374151"
        d="M80.496 14.692V10.74h-4.712V4.42L71.68 5.636v5.104h-3.496v3.952h3.496v9.12c0 4.94 2.508 6.688 8.816 5.928v-3.686c-3.116.152-4.712.19-4.712-2.242v-9.12h4.712zM98.487 10.74v2.698c-1.444-1.976-3.686-3.192-6.65-3.192-5.168 0-9.462 4.332-9.462 9.994 0 5.624 4.294 9.994 9.462 9.994 2.964 0 5.206-1.216 6.65-3.23v2.736h4.104v-19h-4.104zm-6.004 15.58c-3.42 0-6.004-2.546-6.004-6.08 0-3.534 2.584-6.08 6.004-6.08 3.42 0 6.004 2.546 6.004 6.08 0 3.534-2.584 6.08-6.004 6.08zM109.426 7.89c1.444 0 2.622-1.216 2.622-2.622a2.627 2.627 0 00-2.622-2.622 2.627 2.627 0 00-2.622 2.622c0 1.406 1.178 2.622 2.622 2.622zm-2.052 21.85h4.104v-19h-4.104v19zM116.244 29.74h4.104V2h-4.104v27.74zM147.001 10.74l-3.724 13.11-3.952-13.11h-3.914l-3.99 13.11-3.686-13.11h-4.332l5.966 19h4.028l3.99-12.806 3.952 12.806h4.028l5.966-19h-4.332zM156.407 7.89c1.444 0 2.622-1.216 2.622-2.622a2.627 2.627 0 00-2.622-2.622 2.627 2.627 0 00-2.622 2.622c0 1.406 1.178 2.622 2.622 2.622zm-2.052 21.85h4.104v-19h-4.104v19zM173.218 10.246c-2.584 0-4.636.95-5.89 2.926V10.74h-4.104v19h4.104V19.556c0-3.876 2.128-5.472 4.826-5.472 2.584 0 4.256 1.52 4.256 4.408V29.74h4.104V18.074c0-4.94-3.04-7.828-7.296-7.828zM199.981 3.14v10.298c-1.444-1.976-3.686-3.192-6.65-3.192-5.168 0-9.462 4.332-9.462 9.994 0 5.624 4.294 9.994 9.462 9.994 2.964 0 5.206-1.216 6.65-3.23v2.736h4.104V3.14h-4.104zm-6.004 23.18c-3.42 0-6.004-2.546-6.004-6.08 0-3.534 2.584-6.08 6.004-6.08 3.42 0 6.004 2.546 6.004 6.08 0 3.534-2.584 6.08-6.004 6.08z"
      />
      <path
        fill="#16BDCA"
        d="M221.249 19.884c1.113-.895 1.792-2.172 1.792-3.8 0-3.177-2.579-5.349-5.783-5.349h-7.493V29.74h8.063c3.285 0 5.919-2.253 5.919-5.511 0-1.982-.977-3.476-2.498-4.345zm-3.991-5.647c1.195 0 2.036.896 2.036 2.09 0 1.195-.868 2.091-2.036 2.091h-3.747v-4.18h3.747zm.57 12h-4.317v-4.48h4.317c1.276 0 2.199.951 2.199 2.227 0 1.303-.923 2.254-2.199 2.254zM232.122 26.156V10.735h-3.747V29.74h10.996v-3.584h-7.249zM251.492 30.12c5.484 0 9.882-4.344 9.882-9.883 0-5.565-4.398-9.882-9.882-9.882-5.485 0-9.856 4.317-9.856 9.883 0 5.538 4.371 9.882 9.856 9.882zm0-3.665c-3.448 0-6.136-2.58-6.136-6.217 0-3.666 2.688-6.245 6.136-6.245s6.135 2.58 6.135 6.245c0 3.638-2.687 6.217-6.135 6.217zM284.832 19.532h-9.53v3.312h5.756c-.652 2.172-2.552 3.61-5.539 3.61-3.964 0-6.489-2.66-6.489-6.19 0-3.61 2.607-6.271 6.218-6.271 2.307 0 4.235 1.113 5.104 2.633l3.204-1.846c-1.602-2.606-4.67-4.425-8.281-4.425-5.675 0-9.964 4.398-9.964 9.91 0 5.43 4.235 9.855 10.181 9.855 5.457 0 9.34-3.638 9.34-9.122v-1.466z"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header class="text-gray-700 bg-white border-t border-b body-font">
      <div class="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row max-w-5xl">
        <a class="flex items-center w-40 mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Link href="/">
            <a aria-label="RegReSir">
              <div className="container flex justify-center h-12 md:object-left" >
              <Image src="/logo.png" width="400px" height="100%" objectFit="contain" />
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