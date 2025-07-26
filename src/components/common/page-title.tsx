import clsx from 'clsx';
import { FC, PropsWithChildren } from "react"

interface PageTitleProps extends PropsWithChildren {
    textCenter?: boolean | undefined;
}

export const PageTitle: FC<PageTitleProps> = ({children, textCenter}) => {
    return (
        <h1 className={clsx('font-semibold text-primary w-full text-2xl lg:text-4xl', textCenter ? 'text-center' : '')}>{children}</h1>
    )
}

interface PageSubtitleProps extends PropsWithChildren {
    textCenter?: boolean | undefined;
}

export const PageSubtitle: FC<PageSubtitleProps> = ({children, textCenter}) => {
    return (
        <h2 className={clsx("font-semibold w-full text-sm md:text-base", textCenter ? "text-center" : "")}>{children}</h2>
    )
}