import {
  SiAmazonaws,
  SiAngular,
  SiAntdesign,
  SiChakraui,
  SiGatsby,
  SiGo,
  SiJava,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript, SiVuedotjs
} from "react-icons/si";
import { TechIcon } from "./tech-icon";

export function TechList() {
  return (<div className="mt-5 flex flex-row flex-wrap items-end justify-start ">

    <TechIcon Icon={SiNextdotjs} name="Next.js" />
    <TechIcon Icon={SiGatsby} name="Gatsby" />
    <TechIcon Icon={SiReact} name="React" />
    <TechIcon Icon={SiRedux} name="Redux" />
    <TechIcon Icon={SiVuedotjs} name="Vue.js" />
    <TechIcon Icon={SiAngular} name="Angular" />
    <TechIcon Icon={SiTypescript} name="Typescript" />
    <TechIcon Icon={SiTailwindcss} name="Tailwindcss" />
    <TechIcon Icon={SiChakraui} name="Chakraui" />
    <TechIcon Icon={SiAntdesign} name="Antdesign" />
    <TechIcon Icon={SiAmazonaws} name="AWS" />
    <TechIcon Icon={SiNodedotjs} name="Node.js" />
    <TechIcon Icon={SiJava} name="Java" />
    <TechIcon Icon={SiGo} name="Go" />
  </div>);
}
