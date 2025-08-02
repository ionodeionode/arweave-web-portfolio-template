"use client";

import { Mail, MapPin } from "lucide-react";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { handleEmailClick } from "@/lib/utils";

export function Footer() {
  return (
    <motion.footer
      className="py-20 px-4 md:px-8"
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
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            WHY CHOOSE US
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are applying highest security measures, preventing disruption of services and IT systems from exploitation. By making full use of private connectivities, routings through private endpoints, vnets and peerings – we have built a highly secure architecture.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Button size="lg" className="mt-4" onClick={handleEmailClick}>
              Get in touch
            </Button>
          </motion.div>
          <motion.div
            className="flex justify-center gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              onClick={handleEmailClick}
              className="hover:opacity-70 flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="#" className="hover:opacity-70 flex items-center gap-2">
              <MapPin size={20} />
              <span>Vietnam</span>
            </a>
          </motion.div>
          <motion.div
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://x.com/OrochiIONode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://t.me/IONode_VN_chat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://discord.com/invite/G4GA7nBwsj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <FaDiscord size={24} />
            </a>
          </motion.div>
          <motion.div
            className="pt-16 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} IONode. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
