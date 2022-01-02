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
  return (<div className="mt-5 flex-row flex space-x-3  ">
    <TechIcon Icon={SiNextdotjs} />
    <TechIcon Icon={SiGatsby} />
    <TechIcon Icon={SiReact} />
    <TechIcon Icon={SiRedux} />
    <TechIcon Icon={SiVuedotjs} />
    <TechIcon Icon={SiAngular} />
    <TechIcon Icon={SiTypescript} />
    <TechIcon Icon={SiTailwindcss} />
    <TechIcon Icon={SiChakraui} />
    <TechIcon Icon={SiAntdesign} />
    <TechIcon Icon={SiAmazonaws} />
    <TechIcon Icon={SiNodedotjs} />
    <TechIcon Icon={SiJava} />
    <TechIcon Icon={SiGo} />
  </div>);
}
