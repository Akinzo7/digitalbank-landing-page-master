"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-veryLightGray pb-20 lg:pb-0" id="home">
      <div className="container mx-auto px-6 h-full flex flex-col-reverse lg:flex-row items-center">
        <motion.div
          className="w-full lg:w-1/2 lg:pl-0 pt-10 lg:pt-0 lg:pb-32 z-10 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl lg:text-5xl lg:leading-tight font-light text-primary-darkBlue mb-6"
          >
            Next generation <br className="hidden lg:block"/> digital banking
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-neutral-grayishBlue mb-8 max-w-md mx-auto lg:mx-0 text-sm lg:text-base leading-relaxed"
          >
            Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="btn-primary">Request Invite</button>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[700px] flex justify-center lg:justify-end lg:-mr-10">
          <div className="absolute inset-x-0 -top-16 lg:-top-[150px] lg:-right-[350px] lg:inset-x-auto w-full lg:w-[150%] h-[120%] bg-[url('/images/bg-intro-mobile.svg')] lg:bg-[url('/images/bg-intro-desktop.svg')] bg-cover bg-no-repeat bg-center lg:bg-left-bottom -z-0" />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -top-[120px] lg:-top-[100px] lg:-right-[80px] w-[95%] lg:w-[130%] max-w-[500px] lg:max-w-[700px] z-10"
          >
            <Image 
              src="/images/image-mockups.png" 
              alt="Digitalbank mockups" 
              width={768} 
              height={939} 
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
