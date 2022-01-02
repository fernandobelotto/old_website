import {
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaStackOverflow,
  FaWhatsapp
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiCodepen, SiCodesandbox } from "react-icons/si";
import { IconLink } from "./icon-link";

export function IconList() {
  return (<div className="mt-4 list-disc flex flex-row space-x-2">
    <IconLink href="mailto:fernando.bbosco@gmail.com" Icon={HiOutlineMail} />
    <IconLink href="https://www.linkedin.com/in/fernandobelotto/" Icon={FaLinkedin} />
    <IconLink href="https://github.com/fernandobelotto" Icon={FaGithub} />
    <IconLink href="https://wa.me/5519997773727" Icon={FaWhatsapp} />
    <IconLink href="https://open.spotify.com/user/12160766820?si=989c664a687d42cf" Icon={FaSpotify} />
    <IconLink href="https://stackoverflow.com/users/9844118/fernando-bosco" Icon={FaStackOverflow} />
    <IconLink href="https://codepen.io/fernandobelotto" Icon={SiCodepen} />
    <IconLink href="https://codesandbox.io/u/fernandobelotto" Icon={SiCodesandbox} />
  </div>);
}
