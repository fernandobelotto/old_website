import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import AwesomeCardList from "../components/awesome-card-list";
import BlogCardList from "../components/blog-card-list";
import CrudCardList from "../components/crud-card-list";
import { IconList } from "../components/IconList";
import ProjectCardList from "../components/project-card-list";
import { TechList } from "../components/tech-list";
import TranslationList from "../components/translation-list";
import imagePreview from '../public/fernando.png'
declare global {
  interface Window {
    gtag?: any;
  }
}



export default function Index(props: NextPage) {
  const [mode, setMode] = useState(false);

  const toggleDarkLight = () => {
    setMode(!mode);
  };

  return (
    <>
      <div className={`${mode ? "" : "dark"}`}>
        <div className="dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black 
        bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
        >
          <div className="p-10 container mx-auto">

            <main>



              <div className="flex flex-row items-center flex-wrap justify-around">
                <Image
                  src='/fernando.png'
                  alt="Picture of the author"
                  className='rounded-2xl'

                  height={768 / 3}
                  width={1024 / 3}
                />
                <div className="mt-5 lg:mt-0">

                  <div className="flex flex-row justify-between">
                    <h1 className="text-5xl dark:text-white ">Fernando Belotto</h1>
                    <button onClick={toggleDarkLight}>
                      {mode ? (
                        <HiMoon className="text-4xl " />
                      ) : (
                        <HiSun className="text-4xl text-white" />
                      )}
                    </button>
                  </div>

                  <h1 className="text-xl  text-gray-600 mt-3 dark:text-white">
                    Software developer specialized in frontend technologies
                  </h1>
                  <h1 className="text-xl  text-gray-600  dark:text-white">
                    Based in São Paulo, Brazil 🇧🇷
                  </h1>

                  <IconList />
                </div>

              </div>


              <h1 className="text-3xl mt-10 dark:text-white">About</h1>
              <p
                className="
                    text-2xl
                    mt-2 
                    md:w-full
                    first-letter:text-6xl 
                    first-letter:font-bold
                    first-letter:mr-3
                    first-letter:float-left
                    dark:text-white"
              >
                👨🏻‍💻 Fernando is a software developer
                passionated about creating <strong className='font-semibold'>unique web experiences</strong>. He started his carrear in an
                software house base in Campinas city and there he work on
                Angular, React and Vue projects for both <strong> small and large
                  brazilian companies</strong>. There he discover the power of web
                development using all sorts of libraries, patterns and
                techniques. After that he start working at dLocal, integrating
                the first brazilian tech team in the uruguayan company.
                Fernando focus his develeping in <strong>performance, acessibility and responsiviness</strong>
              </p>
              <hr className="mt-3" />
              <h1 className="text-3xl mt-10 mb-3 dark:text-white">Projects </h1>
              <p className='dark:text-white'>Open source projects that you can checkout, fork and used as much as you want ❤️</p>
              <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-4 gap-5">
                <ProjectCardList />
              </div>

              <h1 className="text-3xl mt-10 mb-3 dark:text-white">CRUD Examples </h1>
              <p className='dark:text-white'>Examples projects per technologies implementing crud operations 🔧</p>
              <div className="mt-10 grid base:grid-cols-1 md:grid-cols-5 gap-5">
                <CrudCardList />
              </div>

              <h1 className="text-3xl mt-10 mb-3 dark:text-white">Translations </h1>

              <p className='dark:text-white'>Check some of my translations here 👇</p>
              <div className="mt-10 grid base:grid-cols-1 md:grid-cols-5 gap-5">
                <TranslationList />
              </div>

              <h1 className="text-3xl mt-10 mb-3 dark:text-white">Awesomes Websites </h1>
              <p className='dark:text-white'>Checkout some of the websites that i created base on awesome repos using docusaurus 🗂</p>
              <div className="mt-10 grid base:grid-cols-1 md:grid-cols-5 gap-5">
                <AwesomeCardList />
              </div>

              <h1 className="text-3xl mt-10 mb-3 dark:text-white">Blog Posts </h1>
              <p className='dark:text-white'>Technical writing about the technologies that i work with 📝</p>
              <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                <BlogCardList />
              </div>
              <div className="mb-10">
                <h1 className="text-3xl mt-10 mb-2 dark:text-white">Technologies </h1>
                <p className='dark:text-white'>Here are some of the libs and frameworks that i worked with 🧪</p>
                <TechList></TechList>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
