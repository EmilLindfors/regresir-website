export default function Footer() {
  return (
    <footer class="mt-10 text-gray-700 bg-white border-t body-font">
      <div class="border-t border-gray-200">
        <div class="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
          <a class="flex items-center w-48 mb-4 font-medium text-gray-900 title-font md:mb-0">
            <img src="/logo.png" alt="" />
          </a>
          <div class="flex flex-wrap items-center justify-center mx-auto text-base ">
            <a
              href="/about"
              class="justify-center mr-5 text-sm text-center text-red-600 hover:text-red-900"
            >
              About
            </a>
            <a
              href="/work-packages"
              class="justify-center mr-5 text-sm text-center text-red-600 hover:text-red-900"
            >
              Work Packages
            </a>
            <a
              href="#"
              class="justify-center mr-5 text-sm text-center text-red-600 hover:text-red-900"
            >
              Publications
            </a>
            <a
              href="#"
              class="justify-center mr-5 text-sm text-center text-red-600 hover:text-red-900"
            >
                 Upcoming Events
            </a>
          </div>
          <div class="inline-flex items-center justify-center md:justify-start ">
            <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a class="text-blue-807 hover:text-blue-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-blue-870 hover:text-blue-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-4 text-blue-870 hover:text-blue-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center py-6 mx-auto text-base bg-blueGray-900 ">
          <p class="text-sm text-center text-gray-200 ">
            © Lindfors Foundry — 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
