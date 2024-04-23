import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
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


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>AlphaTech Insights</title>
        <meta name="description" content="Kelvin Rimui's personal portfolio" />
        <link rel="icon" href="/alpha-logo.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">

        {/**Header section */}

        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">AlphaTech Insights</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-slate-700 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.maxino.dev/games"
                >
                  Game
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 drop-shadow-md">
            <h2 className="text-5xl py-2 text-slate-700 font-extrabold dark:text-white md:text-6xl">
              Kelvin
              <span className="text-sky-500">Rimui</span>

            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              IT Consultant.
            </h3>
            <div className="mx-auto bg-gradient-to-b from-sky-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 drop-shadow-md hover:drop-shadow-xl">
              <Image src={profile} alt="" layout="fill" objectFit="cover" />
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
              My team specializes in seamlessly integrating business operations with cutting-edge IT solutions.
              With a focus on websites, CRM systems, hardware implementation, and a diverse background spanning various industries,
              we are your trusted partner in optimizing your technological infrastructure for maximum efficiency and growth.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
        <section className="px-20" >
          <div >
            <h3 className="text-3xl py-1 text-slate-700 dark:text-white font-bold">Our Services</h3>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-gray-200  mx-auto md:text-xl">
              Since the beginning of our journey we've worked with
              <span className="text-sky-600"> Financial Institutions</span>,
              <span className="text-sky-600"> Government Agencies</span>,
              <span className="text-sky-600"> Associations</span>,
              <span className="text-sky-600"> Corporates</span> &
              <span className="text-sky-600"> SME's </span>.
              We've also collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>

          </div>
          <div className="lg:flex gap-10">
            <div className="text-left shadow-xl hover:shadow-2xl p-10 rounded-xl my-10  dark:bg-slate-200 flex-1">
              <Image src={design} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-slate-600 ">
                Web Development
              </h3>
              <p className="py-2">
                Experience the seamless fusion of innovation and functionality with our
                expertly crafted web solutions, where every line of code tells a story of mastery.
              </p>
              <h4 className="py-4 font-bold text-sky-600">Our Tech Stack</h4>
              <li className="text-gray-800 py-1">JavaScript & TypeScript</li>
              <li className="text-gray-800 py-1">TailwindCSS</li>
              <li className="text-gray-800 py-1">Svelte</li>
              <li className="text-gray-800 py-1">Wordpress</li>
            </div>
            <div className="text-left shadow-xl hover:shadow-2xl p-10 rounded-xl my-10  dark:bg-slate-200 flex-1">
              <Image src={code} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-slate-600 ">
                Digital Marketing
              </h3>
              <p className="py-2">
                Elevate your digital presence with our strategic prowess, turning
                clicks into conversions and engagement into lasting relationships.
              </p>
              <h4 className="py-4 font-bold text-sky-600">Our Forte</h4>
              <li className="text-gray-800 py-1">Digital Marketing Strategy</li>
              <li className="text-gray-800 py-1">Social Media Management</li>
              <li className="text-gray-800 py-1">Graphic Design</li>
              <li className="text-gray-800 py-1">Photography & Videography</li>
            </div>
            <div className="text-left shadow-xl hover:shadow-2xl p-10 rounded-xl my-10  dark:bg-slate-200 flex-1">
              <Image src={consulting} alt="" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 text-slate-600 ">
                Software Solutions
              </h3>
              <p className="py-2">
                Experience the pinnacle of software development expertise and
                bespoke solutions, to propel your business forward with precision.
              </p>
              <h4 className="py-4 font-bold text-sky-600">Our Solutions</h4>
              <li className="text-gray-800 py-1">Software Development</li>
              <li className="text-gray-800 py-1">Mobile App development</li>
              <li className="text-gray-800 py-1">ERP systems</li>
              <li className="text-gray-800 py-1">CRM systems</li>
            </div>
          </div>
        </section>

        {/**Portfolio section */}
        <section className="py-10 px-20">
          <div>
            <h3 className="text-3xl py-1 text-slate-700 dark:text-white font-bold">Portofolio</h3>
            <p className="text-md py-2 leading-8  text-gray-800 dark:text-gray-200  mx-auto md:text-xl">
              In every project, we dedicate ourselves wholeheartedly,
              harnessing our<span className="text-sky-600"> collective expertise and passion</span> to deliver exceptional
              solutions that redefine standards and exceed expectations,
              setting new benchmarks for excellence in every endeavor.
            </p>
          </div>

          {/**Logos */}

          <div className="grid grid-cols-6 gap-6 m-6 pt-6">
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
          <div className="contact-details">
            <ul>
              <li>email: info@alphainsights.co.ke</li>
              <li>Phone: +254 722 288 446</li>
            </ul>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
        </section>

      </main>
    </div>
  );
}
