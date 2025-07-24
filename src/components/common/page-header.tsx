import { FC, ReactNode } from "react"
import { PageDescription } from "./page-description"
import { PageTitle } from "./page-title"

interface PageHeaderProps {
    title: string;
    description?: string | ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <>
            <PageTitle>{title}</PageTitle>
            {
                description && <PageDescription>{description}</PageDescription>
            }
        </>
    )
}