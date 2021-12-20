import React from 'react'
import { ProjectCard } from './project-card'

interface Props {

}

export default function ProjectCardList({ }: Props): JSX.Element {

    const projects = [
        {
            title: 'Nodejs crud',
            description: 'Simple REST Api made in NodeJS 17v, express and mongoose',
            link: 'https://github.com/fernandobelotto/node_express_template'
        },
        {
            title: 'Simple Blog',
            description: 'This website, made with tailwindcss and nextjs',
            link: 'https://github.com/fernandobelotto/simple_blog'
        },
        {
            title: 'Repo Viewer',
            description: 'Simple react native app for listing repos (made before github mobile app)',
            link: 'https://github.com/fernandobelotto/repo_viewer_mobile'
        },
        {
            title: 'Go crud',
            description: 'Simple and ultra fast REST Api made in golang',
            link: 'https://github.com/fernandobelotto/go_rest_api'
        },
        {
            title: 'Java Quarkus crud',
            description: 'REST Api using quarkus frameworkd and mongodb',
            link: 'https://github.com/fernandobelotto/quarkus_mongodb'
        },
        {
            title: 'Chakra UI showcase',
            description: 'Simple react project showing the usage of some chakra ui components',
            link: 'https://github.com/fernandobelotto/chakra_ui_examples'
        },
        {
            title: 'React crud',
            description: 'Simple crud client app made with react 17v and hooks',
            link: 'https://github.com/fernandobelotto/react_crud_web'
        },
        {
            title: 'Nodejs+TS crud',
            description: 'Simple REST Api made in NodeJS 17v with typescript',
            link: 'https://google.com'
        },
        {
            title: 'Deno crud',
            description: 'REST Api made with deno',
            link: 'https://google.com'
        },

        {
            title: 'Angular crud',
            description: 'Super simple angular crud',
            link: 'https://google.com'
        },
        {
            title: 'Vue crud',
            description: 'project description',
            link: 'https://google.com'
        },
        {
            title: 'React + Redux crud',
            description: 'Crud project with React 17v and using Redux with Redux-Toolkit',
            link: 'https://google.com'
        },
        {
            title: 'Flutter crud',
            description: 'Flutter 2.8v crud project ',
            link: 'https://google.com'
        },
        {
            title: 'Java Spring crud',
            description: 'REST Api using spring spring frameworkd and mongodb',
            link: 'https://google.com'
        },
        {
            title: 'Ant Design showcase',
            description: 'Simple react project showing the usage of some antd ui components',
            link: 'https://google.com'
        },
        {
            title: 'Python RGB Analysis',
            description: 'Simple python project to analyze rgb data in videos',
            link: 'https://google.com'
        },
        {
            title: 'Web Animation showcase',
            description: 'Experimentation ',
            link: 'https://google.com'
        },
    ]

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
                )
            })}
        </>
    )
}

