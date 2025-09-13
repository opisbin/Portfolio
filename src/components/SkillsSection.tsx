"use client";

export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-black flex items-center">
      <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
        {/* Left Side */}
        <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
          <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
            {/* Vertical Text */}
            <div className="absolute -left-4 top-16 sm:left-16 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
              <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
              <p>All Skills</p>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              Explore My Expertise &amp; Tech Stack
            </h2>
          </div>

          <p className="p-3 text-gray-400 text-sm leading-relaxed">
            These are the tools and technologies that I use daily to develop web
            applications. With a strong foundation in frontend, I focus on
            delivering clean, maintainable code and intuitive user experiences.
          </p>

          <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
            <button className="rounded-lg px-4 py-2 bg-blue-500 text-white transition-all duration-300">
              Skills
            </button>
            <button className="rounded-lg px-4 py-2 bg-transparent text-gray-300 transition-all duration-300">
              Tools
            </button>
          </span>
        </div>

        {/* Right Side (Static Icons Grid) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {/* HTML5 */}
            <div className="text-center">
            <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                </span>
                <p className="text-xs mt-2">HTML5</p>
            </div>
            </div>

            {/* CSS3 */}
            <div className="text-center">
            <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60"/><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>
                </span>
                <p className="text-xs mt-2">CSS3</p>
            </div>
            </div>

            {/* JavaScript */}
            <div className="text-center">
              <div className="p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3h18v18H3V3zm10 15.6c0 .9-.6 1.4-1.3 1.4-.7 0-1.1-.3-1.3-.8l-.6.4c.3.6 1 1.1 1.9 1.1 1.2 0 2.1-.6 2.1-2V11h-1.8v7.6zm5.4.1c-.3.7-.9 1.2-2 1.2-.8 0-1.3-.4-1.5-.8l-.6.4c.4.7 1.2 1.1 2.1 1.1 1.2 0 2.2-.6 2.6-1.7l-1.7-.7z" />
                  </svg>
                </span>
                <p className="text-xs mt-2">JavaScript</p>
              </div>
            </div>

            {/* React */}
            <div className="text-center">
              <div className="p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                </span>
                <p className="text-xs mt-2">React</p>
              </div>
            </div>

            {/* Tailwind */}
            <div className="text-center">
              <div className="p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-teal-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4C7 4 4 7 4 12c0 5 3 8 8 8s8-3 8-8c0-5-3-8-8-8z" />
                  </svg>
                </span>
                <p className="text-xs mt-2">Tailwind</p>
              </div>
            </div>

            {/* Next.js */}
            <div className="text-center">
              <div className="p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center items-center">
                <span className="text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.6 3 8.5 7.2 9.7l-4-11.3h2.6l2.9 8.3L14 4.7c.7.1 1.3.2 2 .5l-2.7 8 5.7 5.7C18.8 21.5 15.6 22 12 22c-6.5 0-12-5.5-12-12S5.5 2 12 2z" />
                  </svg>
                </span>
                <p className="text-xs mt-2">Next.js</p>
              </div>
            </div>
            <div className="text-center">
                <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <span className="text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#41B883" d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"/><path fill="#41B883" d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"/><path fill="#fff" d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"/></g></svg>
                    </span>
                    <p className="text-xs mt-2">Vue.js</p>
                </div>
            </div>

            {/* Add more skills/tools here */}
          </div>
        </div>
      </div>
    </section>
  );
}
