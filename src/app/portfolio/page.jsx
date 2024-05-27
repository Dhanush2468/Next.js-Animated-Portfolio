"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import samz from "./images/samz.png";
import zmas from "./images/festival.PNG";
import imagnify from "./images/imaginify.PNG";
import infi from "./images/infinity.PNG";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Sumz React App",
    img: samz,
    link: "https://summarizearticleswithopenaigpt.netlify.app/",
    github: "https://github.com/Dhanush2468/Summarize-Articles-with-OpenAI-GPT-4",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Threejs Christams Zoom-In ",
    img: zmas,
    link: "https://threejs-christmas-wishes.vercel.app/",
    github: "https://github.com/Dhanush2468/Threejs-Christmas-Wishes",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React.js imagnify App",
    img: imagnify,
    link: "https://imaginary-sable.vercel.app/",
    github: "https://github.com/Dhanush2468/imaginify-using-tyoescript",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Threejs infnity plane App",
    img: infi,
    link: "https://threejs-plane-with-mountains.vercel.app/",
    github: "https://github.com/Dhanush2468/Threejs-plane-with-mountains",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="flex flex-col items-center">
                    <div className="relative w-10 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                    <div className="flex justify-between mt-4">
                      <Link href={item.github}>
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded">
                          Github
                        </button>
                      </Link>
                      <Link href={item.link}>
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded ml-4">
                          Demo
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <a
  href="/contact" // Fixing the URL
  className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
>
  Hire Me
</a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
