import React from "react";
import Heropng from "../assets/shoes.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {

    const slideUp=(delay)=>({
    hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
  })

  return (

    <section className="bg-primary text-white relative">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/*brandinfo*/}
        <div className="flex flex-col justify-end py-14 md:py-20  ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1 variants={slideUp(0.2)} initial="hidden" animate="show" className="text-3xl uppercase font-semibold">Jordon 1 red</motion.h1>
            <motion.p variants={slideUp(0.4)} initial="hidden" animate="show">
              release date <br /> 10/08/2024 <br />
              color way <br />
              red
            </motion.p>
          </div>
          {/*selectsize*/}
          <motion.div variants={slideUp(0.6)} initial="hidden" animate="show" className="max-w-[250px] space-y-3 mx-auto md:mx-0">
            <div className="flex gap-3 flex-wrap justify-center md:justify-start relative z-10 mt-10">
              <p className="size-box">sm</p>
              <p className="size-box">md</p>
              <p className="size-box">lg</p>
              <p className="size-box">xl</p>
              <p className="size-box">8</p>
              <p className="size-box">9</p>
              <p className="size-box">10</p>
              <p className="size-box">11</p>
              <p className="size-box">12</p>
              <p className="size-box">13</p>
            </div>
          </motion.div>
        </div>
        {/*Heroimg*/}
        <div className="flex flex-col justify-center items-center relative gap-16">
          <motion.img
          initial={{ opacity: 0, x: 100, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={Heropng}
            alt=""
            className="max-w-[400px] md:max-w-[500px] relative z-10 brightness-110"
          />
          {/*playicon*/}
          <motion.div  initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} className="flex gap-4 items-center">
            <button className="h-8 w-8 bg-red-500 flex justify-center items-center p-3 rounded-full hover:scale-105 duration-200">
              <FaPlay />
            </button>
            <p>PLAY VIDEO</p>
          </motion.div>
        </div>
        {/*rightside*/}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16 ">
          <motion.p             variants={slideUp(0.6)}
            initial="hidden"
            animate="show"
className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            optio totam asperiores possimus sit, omnis sequi voluptas atque
            nesciunt quibusdam dolores repellat commodi ad dolore soluta eius
            pariatur nemo accusantium.
          </motion.p>
          <motion.div  variants={slideUp(0.8)}
            initial="hidden"
            animate="show" className="flex gap-8 pt-6 relative z-20">
            <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowLeft />
            </div>
            <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowRight />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }} className="text-center tex-[240px] md:text-[220px] lg:[250px] xlg:text-[350px] font-bold font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[]">
        NIKE
      </motion.p>

      <div className="h-[500px] w-[500px] bg-white/45 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
