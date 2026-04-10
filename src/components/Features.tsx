"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: "/images/icon-online.svg",
  },
  {
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    icon: "/images/icon-budgeting.svg",
  },
  {
    title: "Fast Onboarding",
    description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: "/images/icon-onboarding.svg",
  },
  {
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: "/images/icon-api.svg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section className="bg-neutral-lightGrayishBlue py-24" id="features">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-2xl mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-primary-darkBlue mb-6 font-light">Why choose Digitalbank?</h2>
          <p className="text-neutral-grayishBlue leading-relaxed text-sm lg:text-base">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="flex flex-col items-center lg:items-start">
              <div className="mb-6">
                <Image src={feature.icon} alt={feature.title} width={72} height={72} />
              </div>
              <h3 className="text-xl text-primary-darkBlue mb-4 font-light">{feature.title}</h3>
              <p className="text-neutral-grayishBlue text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
