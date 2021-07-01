import React from 'react';
import CircularImage from '../CircularImage/CircularImage';
import Rating from '@material-ui/lab/Rating';

const uses = [{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc Sebastian"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"},{uid:4, photo: "", rate: 4, name: "Andrei Iriciuc"}]

const RightMenu = () => {
        return (
            <div className="right-menu">
                <p className="right-menu-title">Recommended hair stylists</p>

                <hr/>

                <div className="recomand-h">
                    {
                        uses.map(el => {
                            return (
                                <div className="a-recomand">
                                    <div className="flex">
                                        <CircularImage image={el.photo} style={{width: '50px', height: '50px'}}/>
                                        <p>{el.name}</p>
                                    </div>
                                   
                                   <div className="flex">
                                        <Rating name="read-only" size="small"  value={el.rate} readOnly />
                                        <p>({el.rate})</p>
                                    </div>
                                   
                                    <div className="div-follow">
                                        <button className="follwo-btn" onClick={() => {
                                            console.log(el.uid)
                                        }}>Follow</button>
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