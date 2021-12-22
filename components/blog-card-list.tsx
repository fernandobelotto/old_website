import React from 'react'
import { BlogCard } from './blog-card'

export default function BlogCardList() {
    const projects = [
        { title: 'Understanding React Lifecycles', description: 'Brief explanation on what is the react lifecycles', id: 'understanding-lifecycle' },
    ]

    return (
        <>
            {projects.map((repo: any, index: any) => {
                return (
                    <BlogCard
                        id={repo.id}
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
