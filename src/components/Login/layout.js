import { useEffect } from 'react';
import './layout-style.scss'

const Layout = ({children, title}) => {
    useEffect(() => {
        if(localStorage.getItem('user-info')) {
            window.location.href = '/welcome';
        }
    },[]);

    return (
        <div className="layout-page-div">
             <div className="layout-form">
                <p className="layout-title">{title}</p>
                {children}
            </div>
        </div>
    )
}

export default Layout;