"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/logo.jfif"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            // BIOGRAPHY DESC
            <p className="text-lg">
              Hi there, I&apos;m Gollavilli Dhanush Kumar, a skilled full-stack
              web developer with a passion for creating captivating websites.
              I&apos;m eager to explore the realms of Machine Learning and AI
              while maintaining a results-driven approach. I thrive both in
              collaborative environments and as a focused individual, bringing
              efficiency and a touch of humor to my work.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              In addition to my technical skills, I&apos;m committed to
              continual learning and growth, always seeking new challenges to
              push my boundaries further.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              {/* BIOGRAPHY SIGN SVG */}
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="185"
                height="77"
                viewBox="0 0 283.000000 94.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,94.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M2801 922 c-7 -13 -21 -48 -31 -78 -44 -128 -153 -353 -208 -428 -83
-115 -115 -128 -95 -39 13 56 6 65 -41 52 -41 -12 -138 -11 -170 1 -17 6 -26
17 -26 30 0 12 -4 18 -10 15 -5 -3 -10 -14 -10 -24 0 -16 -48 -71 -63 -71 -4
0 -7 13 -7 29 l0 29 -119 -53 c-137 -62 -193 -80 -215 -72 -23 9 -20 20 13 39
68 38 77 109 11 87 -58 -21 -82 -104 -37 -134 30 -19 68 -9 206 56 57 27 107
49 112 49 4 0 9 -10 11 -22 5 -35 26 -32 64 7 32 35 37 36 63 25 32 -13 144
-17 178 -6 21 7 22 4 25 -50 2 -32 8 -59 14 -61 37 -12 134 119 211 287 51
110 64 125 43 50 -40 -148 -86 -511 -72 -565 7 -23 10 -8 15 70 13 192 96 614
144 726 8 20 13 45 11 55 -3 17 -5 17 -17 -4z m-941 -504 c0 -16 -51 -68 -67
-68 -7 0 -13 2 -13 5 0 14 31 64 42 68 23 9 38 7 38 -5z"
                  />
                  <path
                    d="M454 894 c-22 -53 -70 -261 -99 -429 -14 -83 -25 -153 -25 -157 0
-15 23 -8 72 22 26 17 52 30 57 30 5 0 12 -14 16 -30 13 -59 83 -49 233 32
l92 49 0 -38 c0 -22 6 -48 14 -58 12 -17 16 -16 62 27 58 55 99 119 159 254
49 108 52 107 30 -8 -34 -181 -57 -514 -36 -546 4 -7 8 38 9 105 1 119 27 330
56 473 9 41 16 78 16 83 0 4 55 7 123 8 67 1 133 5 147 9 15 5 -31 8 -119 9
-110 1 -142 4 -139 14 3 6 13 37 23 67 9 30 21 59 26 65 5 5 9 17 9 27 0 39
-19 14 -59 -74 l-40 -93 -103 -1 c-57 -1 -107 -3 -113 -4 -22 -5 74 -19 137
-19 l67 -1 -35 -82 c-49 -115 -105 -207 -165 -270 l-50 -53 5 61 c3 34 3 64 0
66 -3 3 -58 -21 -122 -54 -64 -33 -136 -62 -159 -65 -40 -5 -42 -4 -48 23 -12
54 -12 55 -41 44 -15 -6 -40 -20 -56 -31 -16 -12 -32 -18 -36 -15 -13 14 62
392 100 496 10 30 22 65 25 78 9 36 -16 26 -33 -14z"
                  />
                  <path
                    d="M1821 819 c-17 -44 -31 -83 -31 -86 0 -4 -39 -71 -86 -150 -86 -142
-87 -143 -123 -143 -22 0 -82 -20 -150 -50 -146 -65 -200 -82 -228 -75 -24 6
-32 25 -11 25 24 0 78 51 78 74 0 48 -57 37 -90 -16 -24 -39 -25 -57 -6 -83
22 -30 73 -22 186 29 56 25 103 46 105 46 2 0 -5 -19 -15 -42 -21 -46 -26
-113 -10 -138 16 -25 40 -2 113 108 64 96 69 101 90 91 21 -11 21 -11 5 7 -17
19 -15 24 36 108 56 90 71 111 62 86 -100 -301 -169 -600 -138 -600 6 0 9 7 6
15 -20 51 151 632 228 773 36 68 43 102 19 102 -5 0 -23 -36 -40 -81z m-561
-403 c0 -15 -55 -66 -71 -66 -14 0 -11 12 11 48 20 33 60 45 60 18z m279 -97
c-36 -51 -70 -94 -77 -97 -19 -6 -15 74 7 116 10 20 28 45 39 55 24 22 74 37
86 26 5 -4 -20 -49 -55 -100z"
                  />
                  <path d="M847 604 c-9 -9 4 -35 14 -28 5 3 9 12 9 20 0 14 -12 19 -23 8z" />
                  <path d="M2494 595 c-9 -22 1 -29 15 -11 8 10 9 16 1 21 -5 3 -13 -1 -16 -10z" />
                  <path
                    d="M47 443 c-39 -86 -44 -156 -10 -161 16 -2 39 12 76 47 30 28 57 51
60 51 4 0 7 -16 7 -35 0 -93 95 -28 114 77 4 21 2 39 -4 43 -6 4 -10 -6 -10
-25 0 -52 -43 -120 -75 -120 -2 0 -5 17 -7 37 -2 20 -8 38 -15 40 -6 2 -37
-19 -67 -46 -31 -28 -64 -51 -72 -51 -24 0 -13 65 25 145 16 36 25 65 20 65
-6 0 -24 -30 -42 -67z"
                  />
                </g>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Engineer 1 – E2
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    wingify
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full-Stack Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Y-hills
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Learner{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2023{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Relevel
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/5 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
