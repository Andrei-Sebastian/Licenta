import React, { useEffect, useState } from 'react';
import CircularImage from '../CircularImage/CircularImage';
import Rating from '@material-ui/lab/Rating';
import AddImg from "../../images/add.png";
import axios from "axios";

const uses = [
    {uid:6, url_profilePhoto: "", rate: 4.5, name: "Sebastian Andrei"},
    {uid:13, url_profilePhoto: "https://res.cloudinary.com/dm3pamnau/image/upload/v1625389741/folder_p/WhatsApp_Image_2019-11-15_at_18.31.25_ulgetc.jpg", rate: 3.7, name: "Vasilescu Ion"},
    {uid:16, url_profilePhoto: "https://res.cloudinary.com/dm3pamnau/image/upload/v1625655312/folder_p/regular-haircut-high-fade-short-spiky-683x1024_w1vms5.jpg", rate: 4.1, name: "Sebastian Andrei"},
    {uid:15, url_profilePhoto: "https://res.cloudinary.com/dm3pamnau/image/upload/v1625151107/folder_p/photo_2021-02-28_20-48-59_eek0l3.jpg", rate: 2.5, name: "Sebastian Andrei"},
    {uid:4, url_profilePhoto: "", rate: 3.5, name: "Ioan Vasilescu"},
    {uid:4, url_profilePhoto: "", rate: 0, name: "Vlad Popescu"},]

const RightMenu = () => {
    const [stylists, setStylists] = useState([...uses]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:8080/recomandes`,
            {
                headers: {
                    Authorization: localStorage.getItem("user-info"),
                }
            });
            console.log(res)
            if (res.data.length > 0) {
                setStylists(res.data.map(el => {el.rate = 4; return el}));
            }

        }
        getData();
    })
        return (
            <div className="right-menu">
                <p className="right-menu-title">Recommended Hair Stylists</p>

                <hr/>

                <div className="recomand-h">
                    {
                        stylists.map((el, i) => {
                            return (
                                <div className={(i % 2 == 0) ? "a-recomand gray-class" : "a-recomand "}>
                                    <div className="flex">
                                        <CircularImage image={el.url_profilePhoto} style={{width: '40px', height: '40px'}}/>
                                        <p>
                                            <a href={"/profile/" + el.uid}>{el.name}</a>
                                        </p>
                                    </div>
                                   
                                   <div className="flex">
                                        <Rating name="read-only" size="small"  value={el.rate} readOnly  precision={0.01}/>
                                        <p>({el.rate})</p>
                                    </div>
                                   
                                    <div className="div-follow">
                                        <img 
                                            src={AddImg} 
                                            onClick={() => {
                                                console.log(el.uid)
                                            }}
                                        />
                                        {/* <button className="follwo-btn" onClick={() => {
                                            console.log(el.uid)
                                        }}>Follow</button> */}
                                    </div>
                                   
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
}

export default RightMenu;