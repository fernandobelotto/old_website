import React from "react";
import { ProjectCard } from "./project-card";

interface Props { }

export default function ProjectCardList({ }: Props): JSX.Element {
  const projects = [
    {
      title: "Simple Blog",
      description: "This website, made with tailwindcss and nextjs",
      link: "https://github.com/fernandobelotto/simple_blog",
    },
    {
      title: "Repo Viewer",
      description:
        "Simple react native app for listing repos (made before github mobile app)",
      link: "https://github.com/fernandobelotto/repo_viewer_mobile",
    },
    {
      title: "Chakra UI showcase",
      description:
        "Simple react project showing the usage of some chakra ui components",
      link: "https://github.com/fernandobelotto/chakra_ui_examples",
    },
    {
      title: "React Styling",
      description:
        "React project showing differents ways to style components",
      link: "https://react-styling-one.vercel.app/",
    },
  ];

  return (
    <>
      {projects.map((repo: any, index: any) => {
        return (
          <ProjectCard
            key={index}
            title={repo.title}
            description={repo.description}
            link={repo.link}
          />
        );
      })}
    </>
  );
}
