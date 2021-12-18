import React from 'react'
import { BlogCard } from './blog-card'

export default function BlogCardList() {
    const projects = [
        { title: 'Project Title', description: 'project description', link: 'https://google.com' }
    ]

    return (
        <>
            {projects.map((repo: any) => {
                return (
                    <BlogCard
                        title={repo.title}
                        description={repo.description}
                        link={repo.link}
                    />
                )
            })}
        </>
    )
}
