import React from "react";
import { FaMobile } from "react-icons/fa";
import { HiDeviceMobile } from "react-icons/hi";
import { SiAdonisjs, SiDeno, SiFlutter, SiGo, SiJava, SiNestjs, SiNextdotjs, SiNodedotjs, SiQuarkus, SiReact, SiTypescript, SiVuedotjs } from "react-icons/si";
import { CrudCard } from "./crud-card";
import { ProjectCard } from "./project-card";

interface Props { }

export default function CrudCardList({ }: Props): JSX.Element {

  const projects = [
    { link: 'https://github.com/fernandobelotto/adonisjs_crud', title: 'adonisjs', icon: <SiAdonisjs fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/nestjs-crud', title: 'nestjs', icon: <SiNestjs fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/flutter_crud', title: 'flutter', icon: <SiFlutter fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/remix_crud', title: 'remix', icon: <SiReact fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/deno_crud_api', title: 'deno', icon: <SiDeno fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/react_crud', title: 'react', icon: <SiReact fontSize={24} className='dark:text-white' /> },
    // { link: 'https://github.com/fernandobelotto/react_crud_web', title: 'react', icon: <SiReact fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/spring_crud', title: 'spring', icon: <SiJava fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/vuejs_crud', title: 'vuejs', icon: <SiVuedotjs fontSize={24} className='dark:text-white' /> },
    // { link: 'https://github.com/fernandobelotto/reactnative_crud', title: 'react native' },
    { link: 'https://github.com/fernandobelotto/react_native_crud', title: 'react native 2', icon: <SiReact fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/go_rest_api', title: 'golang', icon: <SiGo fontSize={24} className='dark:text-white' /> },
    { link: 'https://github.com/fernandobelotto/quarkus_mongodb', title: 'quarkus ', icon: <SiQuarkus fontSize={24} className='dark:text-white' /> },
    { link: "https://github.com/fernandobelotto/node_ts_api", title: "nodejs typescript", icon: <SiTypescript fontSize={24} className='dark:text-white' /> },
    { link: "https://github.com/fernandobelotto/node_express_template", title: "nodejs", icon: <SiNodedotjs fontSize={24} className='dark:text-white' /> },
  ]

  return (
    <>
      {projects.map((repo: any, index: any) => {
        return (
          <CrudCard
            key={index}
            title={repo.title}
            link={repo.link}
            icon={repo.icon}
          />
        );
      })}
    </>
  );
}
