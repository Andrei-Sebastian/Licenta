import { useEffect } from 'react';
import Sidebar from './side-menu/Sidebar';
import "./layout-stylist.scss"


const LayoutStylist = ({children}) => {
    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            window.location.href = '/login';
        }
    },[]);

    return (
        <div className="layout-stylist">
            <Sidebar/>
            <main>{children}</main>
        </div>
    )
}

export default LayoutStylist;