export default function Footer() {
  return (
    <div>
      <footer className=" bg-teal-200 ">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-sky-400">
                Company
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-sky-400">
                Help center
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-sky-400">
                Legal
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-sky-400">
                Download
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 dark:bg-sky-400 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white dark:text-black sm:text-center">
              © 2023 <a href="https://flowbite.com/">AfroTour™</a>. All Rights
              Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <a
                href="#"
                className="text-black hover:text-black dark:hover:text-white"
              >

                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black dark:hover:text-white"
              >

                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black dark:hover:text-white"
              >
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black dark:hover:text-white"
              >
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-black hover:text-black dark:hover:text-white"
              >
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
