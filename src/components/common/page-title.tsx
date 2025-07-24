import { FC, PropsWithChildren } from "react"

export const PageTitle: FC<PropsWithChildren> = ({children}) => {
    return (
        <h1 className="text-4xl font-semibold text-primary">{children}</h1>
    )
}