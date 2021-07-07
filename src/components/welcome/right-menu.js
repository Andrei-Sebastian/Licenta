import React from 'react';
import CircularImage from '../CircularImage/CircularImage';
import Rating from '@material-ui/lab/Rating';
import AddImg from "../../images/add.png";

const uses = [
    {uid:4, photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1625151107/folder_p/photo_2021-02-28_20-48-59_eek0l3.jpg", rate: 4.5, name: "Sebastian Andrei"},
    {uid:4, photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1625389741/folder_p/WhatsApp_Image_2019-11-15_at_18.31.25_ulgetc.jpg", rate: 3.7, name: "Marcu Ionescu"},
    {uid:4, photo: "https://res.cloudinary.com/dm3pamnau/image/upload/v1621960120/folder_p/regular-user-role-removebg-preview_1_giw24b.png", rate: 4.1, name: "Andrei Stanescu"},
    {uid:4, photo: "https://res-console.cloudinary.com/dm3pamnau/thumbnails/v1/image/upload/v1622020466/Zm9sZGVyX3AvcmVndWxhci11c2VyLXJvbGUtcmVtb3ZlYmctcHJldmlld196dDR0bHc=/preview", rate: 2.5, name: "Alex Ionut Stan"},
    {uid:4, photo: "", rate: 3.5, name: "Ioan Vasilescu"},
    {uid:4, photo: "https://res-console.cloudinary.com/dm3pamnau/thumbnails/v1/image/upload/v1621884660/Zm9sZGVyX3AvMTU0NDI2MzAzXzI3NzIzNDA1NzEwMTUyNV8yMTIyNTY4NTQyNzc0NTk0NjQxX25fYzNqeXUz/preview", rate: 0, name: "Vlad Popescu"},]

const RightMenu = () => {
        return (
            <div className="right-menu">
                <p className="right-menu-title">Recommended Hair Stylists</p>

                <hr/>

                <div className="recomand-h">
                    {
                        uses.map((el, i) => {
                            return (
                                <div className={(i % 2 == 0) ? "a-recomand gray-class" : "a-recomand "}>
                                    <div className="flex">
                                        <CircularImage image={el.photo} style={{width: '40px', height: '40px'}}/>
                                        <p>{el.name}</p>
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