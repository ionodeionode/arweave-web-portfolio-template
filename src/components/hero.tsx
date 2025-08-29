"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaXTwitter, FaTelegram, FaDiscord, FaFacebook, FaYoutube, } from "react-icons/fa6";
import { handleEmailClick } from "@/lib/utils";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          IONODE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl text-muted-foreground font-bold tracking-tight"
        >
          Professional PoS Network Validator · Highly Secured · 24/7 Monitored
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-muted-foreground max-w-[600px]"
        >
          We&apos;re an expert PoS Cryptocurrency Validator, 
          assisting investors and token holders in boosting profits 
          through non-custodial staking. Join us, stake, and earn. 👇
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-semibold italic"
        >
          &quot;JOIN WITH IONODE !&quot;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" className="mt-4" asChild>
            <a href="#" onClick={handleEmailClick}>
              Get in touch
            </a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 pt-4"
        >
          <a
            href="https://x.com/OrochiIONode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaXTwitter size={26} />
          </a>
          <a
            href="https://t.me/iondeonline"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaTelegram size={26} />
          </a>
          <a
            href="https://discord.com/invite/G4GA7nBwsj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaDiscord size={26} />
          </a>
          <a
            href="https://www.facebook.com/ionode.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaFacebook size={26} />
          </a>
          <a
            href="https://www.youtube.com/@ionodeonline"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaYoutube size={26} />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full md:w-5/12 aspect-square md:aspect-auto md:h-[600px]"
      >
        <Image
          src="/pfp_new.png"
          alt="Profile Image"
          width={600}
          height={600}
          className="object-fit rounded-full"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
