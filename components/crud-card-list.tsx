import React from "react";
import { ProjectCard } from "./project-card";

interface Props { }

export default function CrudCardList({ }: Props): JSX.Element {
  const projects = [
    { link: 'https://github.com/fernandobelotto/adonisjs_crud', title: 'adonisjs' },
    { link: 'https://github.com/fernandobelotto/nestjs-crud', title: 'nestjs' },
    { link: 'https://github.com/fernandobelotto/flutter_crud', title: 'flutter' },
    { link: 'https://github.com/fernandobelotto/remix_crud', title: 'remix' },
    { link: 'https://github.com/fernandobelotto/deno_crud_api', title: 'deno' },
    { link: 'https://github.com/fernandobelotto/react_crud', title: 'react' },
    { link: 'https://github.com/fernandobelotto/react_crud_web', title: 'reactjs2' },
    { link: 'https://github.com/fernandobelotto/spring_crud', title: 'spring' },
    { link: 'https://github.com/fernandobelotto/vuejs_crud', title: 'vuejs' },
    { link: 'https://github.com/fernandobelotto/reactnative_crud', title: 'reactnative' },
    { link: 'https://github.com/fernandobelotto/react_native_crud', title: 'react_native2' },
    { link: 'https://github.com/fernandobelotto/go_rest_api', title: 'golang' },
    { link: 'https://github.com/fernandobelotto/quarkus_mongodb', title: 'quarkus ' },
    { link: "https://github.com/fernandobelotto/node_ts_api", title: "nodejs typescript" },
    { link: "https://github.com/fernandobelotto/node_express_template", title: "nodejs" },
  ]

  return (
    <>
      {projects.map((repo: any, index: any) => {
        return (
          <ProjectCard
            key={index}
            title={repo.title}
            link={repo.link}
          />
        );
      })}
    </>
  );
}
