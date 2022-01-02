import React from "react";
import { ProjectCard } from "./project-card";

interface Props { }


export default function AwesomeCardList({ }: Props): JSX.Element {

    const projects = [

        { title: 'Awesome Go', link: 'https://go-awesome.vercel.app', },
        { title: 'Awesome Flutter', link: 'https://flutter-awesome.vercel.app', },
        { title: 'Awesome React', link: 'https://react-awesome.vercel.app', },
        { title: 'Awesome Redux', link: 'https://redux-awesome.vercel.app', },
        { title: 'Awesome Spell', link: 'https://spellbook-awesome.vercel.app', },
        { title: 'Awesome React', link: 'ative](https://react-native-awesome.vercel.app', },
        { title: 'Awesome Nodejs', link: 'https://nodejs-awesome.vercel.app', },
        { title: 'Awesome Swift', link: 'https://swift-awesome.vercel.app', },
        { title: 'Awesome Secret', link: 'https://knowledge-awesome.vercel.app', },
        { title: 'Awesome JS', link: 'https://javascript-awesome.vercel.app', },
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
