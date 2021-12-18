import React, { ReactElement } from 'react'
import { ProjectCard } from './project-card'

interface Props {

}

export default function ProjectCardList({ }: Props): JSX.Element {

    const projects = [
        { title: 'Project Title', description: 'project description', link: 'https://google.com' }
    ]

    return (
        <>
            {projects.map((repo: any) => {
                return (
                    <ProjectCard
                        title={repo.title}
                        description={repo.description}
                        link={repo.link}
                    />
                )
            })}
        </>
    )
}

