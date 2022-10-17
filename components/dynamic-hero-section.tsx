import dynamic from "next/dynamic";

const DynamicHeroSection = dynamic(() => import("./hero-section"), {
  ssr: false,
});

export default DynamicHeroSection;
