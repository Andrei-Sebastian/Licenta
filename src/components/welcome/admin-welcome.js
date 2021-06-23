import React, {Component, useEffect}  from 'react';
import Post from '../Posts/Posts';
import Loading from '../Loading/Loading';
import LeftMenu from '../LeftMenu/LeftMenu';
import TopWelcome from '../TopWelcome/top-welcome';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import Layout from "../layout";
import Sidebar from "../side-menu/Sidebar"

const AdminPage = () => {

    // document.addEventListener("DOMContentLoaded", function(event) {

        const showNavbar = (toggleId, navId, bodyId, headerId) =>{
            console.log("here")
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
        
        // Validate that all variables exist
        if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
        // show navbar
        nav.classList.toggle('show')
        // change icon
        toggle.classList.toggle('bx-x')
        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
        })
        }
        }
        
        // showNavbar('header-toggle','nav-bar','body-pd','header')
        
        // /*===== LINK ACTIVE =====*/
        // const linkColor = document.querySelectorAll('.nav_link')
        
        // function colorLink(){
        // if(linkColor){
        // linkColor.forEach(l=> l.classList.remove('active'))
        // this.classList.add('active')
        // }
        // }
        // linkColor.forEach(l=> l.addEventListener('click', colorLink))
        // });

    


    return (
        <>
<Sidebar/>
        </>
    );
}

export default AdminPage;