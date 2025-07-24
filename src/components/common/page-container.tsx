import { FC, PropsWithChildren } from "react";

export const PageContainer: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                {children}
            </main>
        </div>
    );
};