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
    <IconLink aria='Gmail' href="mailto:fernando.bbosco@gmail.com" Icon={HiOutlineMail} />
    <IconLink aria='LinkedIn' href="https://www.linkedin.com/in/fernandobelotto/" Icon={FaLinkedin} />
    <IconLink aria='Github' href="https://github.com/fernandobelotto" Icon={FaGithub} />
    <IconLink aria='WhatApp' href="https://wa.me/5519997773727" Icon={FaWhatsapp} />
    <IconLink aria='Spotify' href="https://open.spotify.com/user/12160766820?si=989c664a687d42cf" Icon={FaSpotify} />
    <IconLink aria='StackOverflow' href="https://stackoverflow.com/users/9844118/fernando-bosco" Icon={FaStackOverflow} />
    <IconLink aria='Codepen' href="https://codepen.io/fernandobelotto" Icon={SiCodepen} />
    <IconLink aria='Codesandbox' href="https://codesandbox.io/u/fernandobelotto" Icon={SiCodesandbox} />
  </div>);
}
