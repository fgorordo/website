import { FC, PropsWithChildren } from "react"

export const PageDescription: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="text-muted flex flex-col gap-2 text-sm">
            {children}
        </div>
    )
}