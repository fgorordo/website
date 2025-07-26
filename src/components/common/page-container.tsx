import { FC, PropsWithChildren } from "react";

interface PageContainerProps extends PropsWithChildren {
    mainComponent?: boolean;
}

export const PageContainer: FC<PageContainerProps> = ({ children, mainComponent }) => {
    if (mainComponent) {
        return (
            <div className="font-sans px-6 md:px-8 lg:px-20 pb-14 pt-14 max-w-[1920px] mx-auto">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    {children}
                </main>
            </div>
        );
    } else {
        return (
            <div className="font-sans px-6 md:px-8 lg:px-20 pb-14 pt-14 max-w-[1920px] mx-auto">
                <section className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    {children}
                </section>
            </div>
        )
    }
};