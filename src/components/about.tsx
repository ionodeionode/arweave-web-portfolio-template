"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-8 bg-muted/30 rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12 items-center"
        >
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              WHO WE ARE!
            </h2>
            <p className="text-xl text-muted-foreground">
              In 2017, we embarked on a journey of discovery into the realm of Bitcoin through the vast expanse of the Internet. Since then, our journey has been one of constant learning and exploration, as we diligently seek the tangible benefits that Bitcoin can bestow upon humanity.
            </p>
            <p className="text-xl text-muted-foreground">
              At our core, we are driven by the ambitious aspiration to pioneer testnet support for emerging projects and eventually establish ourselves as pivotal validators on these projects’ mainnets. With over a decade of profound experience in the IT industry, we possess the proficiency to effortlessly set up a validator node using just a few straightforward steps. Moreover, our adeptness extends to the meticulous monitoring of network status around the clock, ensuring a system uptime of up to 99.999%.👇
            </p>
            {/* <p className="text-xl font-medium italic">
              &quot;Professional PoS Network Validator, Highly Secured & 24/7 Monitored.&quot;
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-video"
          >
            <Image
              src="/vibes.png"
              alt="About Image"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
