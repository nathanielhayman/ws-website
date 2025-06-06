"use client";

import Divider from "@/components/Divider";
import NavBar from "@/components/NavBar";
import Photo from "@/components/Photo";
import ProjectHighlight from "@/components/ProjectHighlight";
import Image from 'next/image';

// @ts-ignore
import Button, { ArrowButton } from "@/components/Button";
import { HomepageContent } from "@/const/content/homepage";
import { ProjectHighlightData } from "@/const/content/projects";
import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";
import cubeSat from "./cube.svg";

import { FaVideo } from "react-icons/fa6";

import logo from "./logo.svg";

import { useTheme } from "next-themes";

import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { IoIosArrowDown } from "react-icons/io";
import Projects, { AboutUs, PastProjects } from "@/components/Projects";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.8, 1], [0, -distance, -distance])
}

export default function Home() {
  const { theme } = useTheme();

  const content = HomepageContent;

  const highlights = ProjectHighlightData;

  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, 300);

  return (
    <div className={"flex-1 overflow-x-hidden"}>
      <NavBar />
      <main className={`text-text-dark`}>
        <div className={`fixed top-0 w-full h-full bg-black`} />
        {/* <div className="fixed w-full h-[30rem] top-0">
          <Image
            className="w-full h-[44rem] xl:h-[60rem]"
            alt=""
            src={bgSat}
            placeholder='blur'
            style={{
              objectFit: 'cover'
            }}
          />
        </div> */}
        <motion.div
          style={{ y }}
          className="absolute top-0 hidden md:block w-full h-[48rem]"
        >
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover'
            }}
          >
            <source src="sat.mp4" type='video/mp4' />
          </video>
        </motion.div>
        <div className="fixed top-[4rem] block md:hidden w-full h-[40rem]">
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100%",
              objectFit: 'cover'
            }}
          >
            <source src="satBlock.mp4" type='video/mp4' />
          </video>
        </div>
        {/* <h1 className="absolute bottom-[12rem] left-[2rem] font-medium font-mono text-8xl opacity-90 bg-gradient-to-tr from-accent-red to-accent-red-hover text-transparent bg-clip-text">
          WASHU SATELLITE
        </h1> */}
        {/* <div className="absolute top-[10rem] -right-[16rem]  md:-right-[8rem] xl:right-[8rem] rotate-12">
          <video width={700} height={700} autoPlay muted loop>
            <source src="vector.webm" type='video/webm'/>
          </video>
        </div> */}
        <div className={clsx(
          `relative bg-bg border-bg-highlight border-t-[1px] mt-[36rem] md:mt-[44rem]`,
          
        )}>
          <div
            className="flex flex-col px-2 md:px-8 lg:px-24 gap-8 relative pb-[4rem]"
          >
            <div
              style={{ backgroundImage: `url("/dots.svg")`, backgroundSize: "100px", backgroundPositionX: 0 }}
              className="absolute z-0 left-0 top-0 w-[10rem] opacity-60 h-full bg-repeat-y"
            />
            <motion.div
              className="flex flex-row gap-2 items-center absolute font-mono -top-[4rem] left-24 p-1 px-2 m-1 bg-black bg-opacity-50 opacity-90 rounded-md text-sm text-[#eeeeee] font-semibold"
              initial={{ opacity: 1, y: 0 }}
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0]),
                y: useTransform(scrollYProgress, [0, 0.1, 1], [0, -50, -50])
              }}
            >
              <FaVideo />
              <span>VECTOR Model Render</span>
            </motion.div>
            <div className="flex-1 flex flex-col">
              <div className={"flex flex-row mt-[3rem] gap-0 md:gap-[4rem] justify-center items-center"}>
                {/* <div className={"hidden lg:block w-[12rem]"}><Divider/></div> */}

                <p className={`italic text-center font-medium bg-gradient-to-bl from-[#5f5e5e] to-[#494848] w-[60rem] bg-clip-text text-transparent text-xl`}>
                  {content.missionStatement}
                </p>

                {/* <div style={{ backgroundImage: "url(/tagline.svg)", backgroundSize: "70rem" }} className="w-[70rem] h-[6rem] bg-no-repeat"/> */}


                {/* <div className={"hidden lg:block w-[12rem]"}><Divider/></div> */}
              </div>
              <div className={"flex flex-row justify-center lg:hidden gap-4 items-center mt-4"}>
                <div className={"w-full lg:w-[12rem]"}><Divider /></div>
                <Image src={cubeSat.src} alt={""} width={30} height={30} />
                <div className={"w-full lg:w-[12rem]"}><Divider /></div>
              </div>

              <div className="mt-[4rem] flex flex-row justify-center md:justify-start">
                <AboutUs/>
              </div>

              <motion.div
                transition={{ delay: 0.3, duration: 0.3 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={'visible'}
                variants={{
                  visible: { opacity: 1, x: 0 }
                }}
                className={clsx(
                  "shadow-md dark:shadow-none",
                  `rounded-md bg-fg border-bg-highlight border-[1px]`,
                  "relative flex flex-row flex-wrap xl:flex-nowrap font-mono items-start gap-8 justify-between mt-[3rem]"
                )}
              >
                <div className={`flex flex-col gap-4 items-start justify-between font-sans p-8`}>
                  <p className={"text-lg font-medium max-w-[60rem]"}>
                    {content.aboutUs}
                  </p>
                  <ArrowButton
                    href="/team"
                    text="Our Team"
                  />
                </div>

                <Photo src={"/team_balloon.jpeg"} right>
                  <p className="p-1 px-2 m-1 bg-black bg-opacity-50 rounded-md text-sm text-[#eeeeee] font-semibold">SP24 Team Photo</p>
                </Photo>
              </motion.div>

              {/* <Heading>
                Current Projects
              </Heading> */}

              {/* <h1 className={`font-mono text-2xl font-bold mt-[6rem] text-text-dark`}>
                Active Projects
              </h1> */}
              
              {/* <Image src={"/projects.svg"} width={500} height={200} alt={""}/> */}

              <div className="flex flex-row justify-center md:justify-start mt-[8rem] mb-8 gap-4">
                <Projects/>
              </div>

              <div className={"flex flex-row flex-wrap items-center gap-y-[4rem] gap-x-[2rem]"}>
                {highlights.filter(p => p.phase !== 'success').map((p, i) => (
                  <ProjectHighlight
                    {...p}
                    direction={i % 2 === 0 ? 'right' : 'left'}
                  />
                ))}
              </div>

              {/* <Heading>
                Completed Projects
              </Heading> */}

              {/* <h1 className={`font-mono text-2xl font-bold mt-[6rem] text-text-dark`}>Completed Projects</h1> */}

              <div className="mt-[8rem] mb-8 flex flex-row justify-center md:justify-start px-1">
                <PastProjects/>
              </div>

              <div className={"flex flex-col gap-[4rem]"}>
                {highlights.filter(p => p.phase === 'success').map((p, i) => (
                  <ProjectHighlight
                    {...p}
                    key={p.id}
                    direction={i % 2 === 0 ? 'right' : 'left'}
                  />
                ))}
              </div>
            </div>
            </div>
          </div>
      </main>
    </div>
  );
}
