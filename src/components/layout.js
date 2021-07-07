import { useEffect } from 'react';
import TopNavigation from './NavigationMenu/NavBar';

const Layout = ({children}) => {
    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            window.location.href = '/login';
        }
    },[]);

    return (
        <>
            <TopNavigation/>
            <main>{children}</main>
        </>
    )
}

export default Layout;