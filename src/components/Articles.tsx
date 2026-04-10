"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: "/images/image-currency.jpg",
  },
  {
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: "/images/image-restaurant.jpg",
  },
  {
    author: "By Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    image: "/images/image-plane.jpg",
  },
  {
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    image: "/images/image-confetti.jpg",
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

export default function Articles() {
  return (
    <section className="bg-neutral-veryLightGray py-24" id="blog">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl text-primary-darkBlue mb-12 font-light text-center lg:text-left"
        >
          Latest Articles
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {articles.map((article, idx) => (
            <motion.article 
              key={idx} 
              variants={itemVariants} 
              className="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs text-neutral-grayishBlue mb-3">{article.author}</p>
                <h3 className="text-lg text-primary-darkBlue mb-3 font-medium group-hover:text-primary-limeGreen transition-colors line-clamp-2">
                  <a href="#">{article.title}</a>
                </h3>
                <p className="text-neutral-grayishBlue text-sm leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
