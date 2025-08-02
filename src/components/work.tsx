"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const projects = [
  {
    title: "AR.IO",
    period: "",
    image: "/ario_logo.png",
    description: "The first permanent cloud network",
    link: "https://gateways.ario.ionode.top/#/staking",
  },
  {
    title: "NAMADA.NET",
    period: "",
    image: "/namada_logo.png",
    description: "Your Gateway to the Shielded Multichain",
    link: "https://namada.valopers.com/validators",
  },
  {
    title: "AXONE.XYZ",
    period: "",
    image: "/axone_logo.png",
    description: "Meaning, Money, and Policy for Onchain Agentic AI",
    link: "https://explorer.aknodes.com/AXONE-MAINNET/staking",
  },
    {
    title: "VOI.NETWORK",
    period: "",
    image: "/voi_logo.png",
    description: "Built by You. Run by You. Owned by You.",
    link: "https://voirewards.com/",
  },
  {
    title: "LUMOZ.ORG",
    period: "",
    image: "/lumoz_logo.png",
    description: "MODULAR COMPUTE LAYER FOR AI, ZK, Rollup and More",
    link: "https://verifier.lumoz.org/staking",
  },
  {
    title: "PENUMBRA.ZONE",
    period: "",
    image: "/penumbra_logo.png",
    description: "PRIVATE TRADING in Any CRYPTO ASSET",
    link: "https://dex.penumbra.zone",
  },
  {
    title: "LIDO.FI",
    period: "",
    image: "/lido_logo.png",
    description: "Ethereum’s leading liquid staking token, with best-in-class security, deepest liquidity and competitive rewards",
    link: "https://explorer.ssv.network/operators/645",
  },
  {
    title: "KYVE.NETWORK",
    period: "",
    image: "/kyve_logo.png",
    description: "Power your decisions with trusted, tamper-proof data. KYVE ensures every insight is reliable, decentralized, and ready for action.",
    link: "https://app.kyve.network",
  },
  {
    title: "COVALENTHQ.COM",
    period: "",
    image: "/covalenthq_logo.png",
    description: "AI-driven crypto native businesses powered by Covalent's data infrastructure. Agents need Data & Covalent is Data.",
    link: "https://www.covalenthq.com/staking",
  },
  {
    title: "QUICKSILVER.ZONE",
    period: "",
    image: "/quicksilver_logo.png",
    description: "The Cosmos Liquid Staking Zone",
    link: "https://app.quicksilver.zone",
  },
  {
    title: "FUSE.IO",
    period: "",
    image: "/fuse_logo.png",
    description: "Blockchain For Real-World Payments",
    link: "https://console.fuse.io",
  },
  {
    title: "MASSA.NET",
    period: "",
    image: "/massa_logo.png",
    description: "Massa is the Layer 1 that brings true decentralization to where it’s needed.",
    link: "https://explorer.massa.net/mainnet",
  },
  {
    title: "TANGLE.TOOLS",
    period: "",
    image: "/tangle_logo.png",
    description: "The Layer 1 for On-Demand Services",
    link: "https://app.tangle.tools",
  },
  {
    title: "LAVANET.XYZ",
    period: "",
    image: "/lavanet_logo.png",
    description: "Connecting AI agents and users to blockchains",
    link: "https://www.lavanet.xyz/stakers",
  },
  {
    title: "PACTUS.ORG",
    period: "",
    image: "/pactus_logo.png",
    description: "Building the Most Accessible Blockchain",
    link: "https://pactus.org",
  },
];

export function Work() {
  return (
    <motion.section
      id="work"
      className="py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12"
      >
        PROJECT POOLS
        <br />
        MAINNETS
      </motion.h2>
      {/* Thay đổi md:grid-cols-2 thành md:grid-cols-3 */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          // Bọc motion.div bằng thẻ <a>
          <a
            key={project.title} // Chuyển key lên thẻ <a>
            href={project.link}
            target="_blank" // Mở trong tab mới
            rel="noopener noreferrer" // Thực hành bảo mật tốt
            className="group cursor-pointer block" // Đảm bảo liên kết chiếm toàn bộ không gian thẻ
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Loại bỏ className="group cursor-pointer" từ đây vì nó đã ở thẻ <a>
            >
              <Card className="border-0 bg-muted/30">
                <motion.div
                  className="relative aspect-square overflow-hidden rounded-t-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
