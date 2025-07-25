import { FC, PropsWithChildren } from "react"

export const CardsContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[32px] w-full">
            {children}
        </div>
    )
}