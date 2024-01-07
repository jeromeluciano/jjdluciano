import React from "react";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiChakraui, SiMysql, SiTailwindcss, SiTrpc } from "react-icons/si";
import { TbBrandNextjs, TbBrandPlanetscale } from "react-icons/tb";

type iconForArgType = "next" | "js" | "tailwindcss" | "react" | "chakra" | "laravel" | "php" | "mysql" | "firebase"

export function generateIconElement(iconFor: iconForArgType) {
  const techMap = {
    next: [TbBrandNextjs, '#FEFCE8'],
    js: [IoLogoJavascript, '#F4E166'],
    tailwindcss: [SiTailwindcss, '#43ADDA'],
    react: [FaReact, '#149ECA'],
    chakra: [SiChakraui, '#44C8C1'],
    laravel: [FaLaravel, '#F03E30'],
    php: [FaPhp, '#7277AD'],
    mysql: [SiMysql, '#3E6E93'],
    firebase: [IoLogoFirebase, '#FFCC32'],
    planetscale: [TbBrandPlanetscale, '#FEFCE8'],
    trpc: [SiTrpc, '#398CCB']

  };
  
  if (!(iconFor in techMap)) return;

  const [iconType, iconColor] = techMap[iconFor];

  const element = React.createElement(iconType, { color: iconColor }, null)

  return element;
}
