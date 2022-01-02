import React from "react";
import { FaMobile } from "react-icons/fa";
import { HiDeviceMobile } from "react-icons/hi";
import { SiAdonisjs, SiDeno, SiFlutter, SiGo, SiJava, SiNestjs, SiNextdotjs, SiNodedotjs, SiQuarkus, SiReact, SiTypescript, SiVuedotjs } from "react-icons/si";
import { CrudCard } from "./crud-card";

interface Props { }

export default function TranslationList({ }: Props): JSX.Element {

    const projects = [
        { link: 'https://fernandobelotto.github.io/create-react-app', title: 'Create React App' },
        { link: 'https://fernandobelotto.github.io/react-redux', title: 'React Redux' },
        { link: 'https://fernandobelotto.github.io/redux-toolkit', title: 'Redux Toolkit' },
    ]

    return (
        <>
            {projects.map((repo: any, index: any) => {
                return (
                    <CrudCard
                        key={index}
                        title={repo.title}
                        link={repo.link}
                    />
                );
            })}
        </>
    );
}
