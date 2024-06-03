import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsList, BsX } from "react-icons/bs";
import { useState } from "react";
import profile from "../public/profile-picture.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web2 from "../public/ecommerce.png";
import web3 from "../public/websites.png";
import web4 from "../public/Youtube.png";
import web5 from "../public/Graphic.png";
import web7 from "../public/Fintech.png";
import unity from "../public/K-unity.png";
import orion from "../public/orion.png";
import ape from "../public/drunkenape.png";
import sb4u from "../public/SB4U-LOGO-1.png";
import compact from "../public/compact.png";
import bbs from "../public/Benchmark.png";
import alphalogo from "../public/alpha1a.png";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [fullScreenMenu, setFullScreenMenu] = useState(false); // State to track full-screen menu

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    if (!fullScreenMenu) {
      setShowMenu(!showMenu);
    }
  };

  // Function to handle menu item click and close full-screen menu
  const handleMenuItemClick = () => {
    if (fullScreenMenu) {
      toggleMenu();
      setFullScreenMenu(false);
    }
  };

  // Function to toggle full-screen menu
  const toggleFullScreenMenu = () => {
    setFullScreenMenu(!fullScreenMenu);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>AlphaTech Insights</title>
        <meta name="description" content="Kelvin Rimui's personal portfolio" />
        <link rel="icon" href="/alpha-logo.ico" />
      </Head>
      <main className="scroll-smooth bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">

        {/**Header section */}

        <section className="min-h-screen">
          <nav className="py-4 md:py-6 lg:py-10 mb-4 md:mb-6 lg:mb-12 flex justify-between dark:text-white">
            <div className="h-6 w-10 md:w-20 md:h-8 lg:h-10">
              <Image
                className="h-full w-auto contrast-50"
                layout="responsive"
                src={alphalogo}
                alt="AlphaTech Insights Logo"
              />
            </div>
            <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}> {/* Show/hide menu on smaller screens */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="px-5 py-2">
                  <a href="#about" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a href="#services" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Services
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a href="#portfolio" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Portfolio
                  </a>
                </div>
                <div className="px-5 py-2">
                  <a href="#contact" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center"> {/* Show regular menu on medium and larger screens */}
              <div className="px-5 py-2">
                <a href="#about" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  About
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#services" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Services
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#portfolio" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Portfolio
                </a>
              </div>
              <div className="px-5 py-2">
                <a href="#contact" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>

            {/* Hamburger menu icon */}
            <div className="md:hidden">
              <BsList onClick={toggleMenu} className="cursor-pointer text-lg md:text-xl" />
            </div>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-lg md:text-xl"
                />
              </li>
              {/**  <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-slate-700 text-white px-3 md:px-4 py-1 md:py-2 border-none rounded-md ml-4 md:ml-8"
                  href="https://www.maxino.dev/games"
                >
                  Game
                </a>
              </li> */}
            </ul>
          </nav>
          <div id="about" className="text-center p-4 md:p-6 py-6 md:py-10 drop-shadow-md">
            <h2 className="text-3xl md:text-5xl py-2 text-slate-700 font-extrabold dark:text-white">
              Kelvin
              <span className="text-sky-500 font-extrabold"> Rimui</span>
            </h2>
            <h3 className="text-xl md:text-2xl py-2 dark:text-white">
              IT Consultant.
            </h3>
            <div className="mx-auto bg-gradient-to-b from-sky-500 rounded-full w-48 md:w-80 h-48 md:h-80 relative overflow-hidden mt-10 md:mt-20 lg:mt-24">
              <Image src={profile} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className=" text-md md:text-md py-3 md:py-5 leading-7 md:leading-8 text-gray-800 dark:text-gray-200 max-w-md md:max-w-3xl mx-auto">
              My team specializes in seamlessly integrating business operations with the relevant IT solutions.
              With a focus on websites, CRM systems, hardware implementation, and a diverse background spanning various industries,
              we are your trusted partner in optimizing your technological infrastructure for maximum efficiency and growth.
            </p>

            {/**Social Icons */}
            <div className="text-3xl md:text-5xl flex justify-center gap-8 md:gap-16 py-2 md:py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/rimui09">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/rimui-kelvin-917b8b1a5/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100057993361993">
                <AiFillFacebook />
              </a>
              <a href="https://github.com/rimuikelvin09">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </section>


        {/** Services Section */}
        <section id="services" className="px-4 md:px-6 lg:px-20" >
          <div >
            <h3 className="text-3xl py-1 text-slate-700 dark:text-white font-bold">Our Services</h3>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-gray-200  mx-auto md:text-l">
              Since the beginning of our journey we've worked with
              <span className="text-sky-600"> Financial Institutions</span>,
              <span className="text-sky-600"> Government Agencies</span>,
              <span className="text-sky-600"> Associations</span>,
              <span className="text-sky-600"> Corporates</span> &
              <span className="text-sky-600"> SME's </span>.
              We've also collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
          </div>

          {/**Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            <div className="text-left leading-8 shadow-xl hover:shadow-2xl p-4 md:p-10 rounded-xl my-4 md:my-10 dark:bg-slate-200">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="text-lg md:text-xl font-medium pt-4 md:pt-8 pb-2 text-slate-600 ">
                Web Development
              </h3>
              <p className="text-sm  md:text-base py-2 ">
                Experience the seamless fusion of innovation and functionality with our
                expertly crafted web solutions, where every line of code tells a story of mastery.
              </p>
              <h4 className="py-2 md:py-4 font-bold text-sky-600">Our Solutions</h4>
              <ul className="px-1 list-none text-sm md:text-base text-gray-800 dark:text-gray-800">
                <li className=" py-1">✅ E-Commerce</li>
                <li className="py-1">✅ Portfolio's</li>
                <li className=" py-1">✅ Corporate websites</li>
                <li className="py-1">✅ Blog websites</li>
              </ul>

            </div>
            <div className="text-left leading-8 shadow-xl hover:shadow-2xl p-4 md:p-10 rounded-xl my-4 md:my-10 dark:bg-slate-200">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="text-lg md:text-xl font-medium pt-4 md:pt-8 pb-2 text-slate-600 ">
                Digital Marketing
              </h3>
              <p className="text-sm md:text-base py-2">
                Elevate your digital presence with our strategic prowess, turning
                clicks into conversions and engagement into lasting relationships.
              </p>
              <h4 className="py-2 md:py-4 font-bold text-sky-600">Our Forte</h4>
              <ul className="px-1 list-none text-sm md:text-base text-gray-800 dark:text-gray-800">
                <li className="py-1">✅ Digital Marketing Strategy</li>
                <li className="py-1">✅ Social Media Management</li>
                <li className="py-1">✅ Graphic Design</li>
                <li className="py-1">✅ Photography & Videography</li>
              </ul>
            </div>
            <div className="text-left shadow-xl leading-8 hover:shadow-2xl p-4 md:p-10 rounded-xl my-4 md:my-10 dark:bg-slate-200">
              <Image src={consulting} alt="" width={100} height={100} />
              <h3 className="text-lg md:text-xl font-medium pt-4 md:pt-8 pb-2 text-slate-600 ">
                Software Solutions
              </h3>
              <p className="text-sm md:text-base py-2">
                Experience the pinnacle of software development expertise and
                bespoke solutions, to propel your business forward with precision.
              </p>
              <h4 className="py-2 md:py-4 font-bold text-sky-600">Our Solutions</h4>
              <ul className="px-1 list-none text-sm md:text-base text-gray-800 dark:text-gray-800">
                <li className="py-1">✅ Software Development</li>
                <li className="py-1">✅ Mobile App development</li>
                <li className="py-1">✅ ERP & CRM systems</li>
                <li className="py-1">✅ Fintech solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/**Portfolio section */}
        <section id="portfolio" className="mt-10 px-4 md:px-6 lg:px-20">
          <div>
            <h3 className="text-3xl py-1 text-slate-700 dark:text-white font-bold">Our Portofolio</h3>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-gray-200  mx-auto md:text-l">
              In every project, we dedicate ourselves wholeheartedly,
              harnessing our<span className="text-sky-600"> collective expertise and passion</span> to deliver exceptional
              solutions that redefine standards and exceed expectations,
              setting new benchmarks for excellence in every endeavor.
            </p>
          </div>

          {/**Logos */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 md:gap-0 m-4 md:m-6 pt-6">
            <div className="size-40">
              <a href="https://www.bbsltd.co.ke" target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover"
                  layout="responsive"
                  src={bbs}
                  alt=""
                />
              </a>
            </div>
            <div className="size-40">
              <a href="https://www.k-unity.co.ke/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover"
                  layout="responsive"
                  src={unity}
                  alt=""
                />
              </a>
            </div>
            <div className="size-40">
              <a href="https://www.drunkenape.africa/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover"
                  layout="responsive"
                  src={ape}
                  alt=""
                />
              </a>
            </div>
            <div className="size-40">
              <a href="https://sb4uplatform.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover"
                  layout="responsive"
                  src={sb4u}
                  alt=""
                />
              </a>
            </div>
            <div className="size-40">
              <a href="https://shop.compacthydro.co.ke/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover"
                  layout="responsive"
                  src={compact}
                  alt=""
                />
              </a>
            </div>
            <div className="size-36">
              <a href="https://orionfastcash.co.ke/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover"
                  layout="responsive"
                  src={orion}
                  alt=""
                />
              </a>
            </div>

          </div>

          {/**Showcase images */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-xl hover:shadow-2xl">
              <a href="https://www.bbsltd.co.ke" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web7}
                  alt=""
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-xl hover:shadow-2xl">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-xl hover:shadow-2xl">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-xl hover:shadow-2xl">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-xl hover:shadow-2xl">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                alt=""
              />
            </div>

            {/**Empty image container */}
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={""}
                alt=""
              />
            </div>
          </div>
        </section>

        {/**Footer section */}

        <section className="py-10 text-1xl flex justify-center gap-16  text-gray-600 dark:text-gray-400">
          <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
              <div class="px-5 py-2">
                <a href="#about" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                  About
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#services" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Services
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#portfolio" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Portfolio
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#contact" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </nav>
            <div className="text-3xl md:text-5xl flex justify-center gap-8 md:gap-16 py-2 md:py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/rimui09">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/rimui-kelvin-917b8b1a5/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100057993361993">
                <AiFillFacebook />
              </a>
              <a href="https://github.com/rimuikelvin09">
                <AiFillGithub />
              </a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
              Made with ❤️ © 2024 AlphaTech Insights, Inc. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
