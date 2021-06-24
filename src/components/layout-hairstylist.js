import { useEffect } from 'react';
import Sidebar from './side-menu/Sidebar';


const LayoutStylist = ({children}) => {
    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            window.location.href = '/login';
        }
    },[]);

    return (
        <>
            <Sidebar/>
            <main>{children}</main>
        </>
    )
}

export default LayoutStylist;