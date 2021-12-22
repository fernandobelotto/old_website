import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaStackOverflow, FaWhatsapp } from 'react-icons/fa';
import { HiMoon, HiOutlineMail, HiSun } from 'react-icons/hi';
import { SiAmazonaws, SiAngular, SiAntdesign, SiChakraui, SiGatsby, SiGo, SiJava, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVuedotjs } from 'react-icons/si';
import BlogCardList from '../components/blog-card-list';
import ProjectCardList from '../components/project-card-list';
import { IconLink } from '../components/icon-link';
import { TechIcon } from '../components/tech-icon';
import Image from 'next/image';

declare global {
  interface Window {
    gtag?: any;
  }
}

export default function Index(props: NextPage) {

  const [mode, setMode] = useState(false)

  const toggleDarkLight = () => {
    setMode(!mode)
  }
  return (
    <>
      <div className={`${mode ? '' : 'dark'}`}>
        <div className="bg-slate-50 dark:bg-gray-900">
          <div className="p-10">

            <Head>
              <title>Fernando Belotto</title>
              <meta name="description" content="Fernando Belotto Website" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <div className="flex flex-row justify-between">
                <h1 className="text-5xl dark:text-white ">
                  Fernando Belotto
                </h1>
                <button onClick={toggleDarkLight}>
                  {mode ?
                    <HiMoon className='text-4xl ' /> :
                    <HiSun className='text-4xl text-white' />
                  }
                </button>
              </div>
              <h1 className="text-xl  text-gray-600 mt-3 dark:text-white">
                Software developer specialize in frontend technologies |
                Based in São Paulo, Brazil 🇧🇷
              </h1>
              <div className='mt-4 list-disc flex flex-row space-x-2'>
                <IconLink href='mailto:fernando.bbosco@gmail.com' Icon={HiOutlineMail} />
                <IconLink href='' Icon={FaLinkedin} />
                <IconLink href='https://github.com/fernandobelotto' Icon={FaGithub} />
                {/* <IconLink href='' Icon={FaDev} />
            <IconLink href='' Icon={FaMedium} /> */}
                <IconLink href='https://wa.me/5519997773727' Icon={FaWhatsapp} />
                <IconLink href='https://open.spotify.com/user/12160766820?si=989c664a687d42cf' Icon={FaSpotify} />
                <IconLink href='https://stackoverflow.com/users/9844118/fernando-bosco' Icon={FaStackOverflow} />
              </div>
              <hr className='mt-3' />
              <h1 className='text-3xl mt-10 dark:text-white'>Projects</h1>
              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
                <ProjectCardList />
              </div>
              <h1 className='text-3xl mt-10 dark:text-white'>Blog Posts</h1>
              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-5">
                <BlogCardList />
              </div>
              <h1 className='text-3xl mt-10 dark:text-white'>About</h1>
              <p className='
          mt-2 
          lg:w-1/2
          md:w-full
          first-letter:text-7xl 
          first-letter:font-bold
          first-letter:mr-3
          first-letter:float-left
          dark:text-white'>Fernando is a software developer passionated about creating unique web experiences. He&apos;s started his carrear in an software house base in Campinas city and there he work on Angular, React and Vue projects for both small and large brazilian companies. There he discover the power of web development using all sorts of libraries, patterns and techniques. After that he start working at dLocal, integrating the first brazilian team in the uruguayan compani. Fernando loves teaching so he uses his spare time to create a video tutorials or writing blog posts about his new discoveries</p>
              <h1 className='text-3xl mt-10 dark:text-white'>Technologies</h1>
              <div className="mt-5 flex-row flex space-x-3  ">
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
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

