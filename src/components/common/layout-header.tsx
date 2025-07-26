import { DesktopHeader } from './desktop-header'
import { MobileHeader } from './mobile-header'

export const LayoutHeader = () => {
    return (
        <header className='sticky top-0 z-50 bg-background'>
            <MobileHeader />
            <DesktopHeader />
        </header>
    )
}