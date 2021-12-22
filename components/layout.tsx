import React, { ReactElement } from 'react'

interface Props {
    children: JSX.Element
}

export default function Layout({ children }: Props): ReactElement {
    return (
        <>
            {children}
        </>
    )
}
