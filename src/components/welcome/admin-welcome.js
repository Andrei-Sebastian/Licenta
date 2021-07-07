import React, {Component, useEffect, useState}  from 'react';
import axios from 'axios';
import Sidebar from "../side-menu/Sidebar"
import Table from "./table";

const AdminPage = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:8080/getreport`,
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            });
            setReports(res.data);
            setLoading(false);
        }
        getData();
        
    }, []);

    return (
        <>
            <Sidebar/>
            <br/>
            <br/>
            <br/>
            {!loading ? <Table data={reports}/> : <h3>Loading...</h3>}

        </>
    );
}

export default AdminPage;