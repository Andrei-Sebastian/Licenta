import React, { useEffect, useState }  from 'react';
import CircularImage from '../CircularImage/CircularImage';
import axios from "axios";
import Posts from "../Posts/Posts";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";
import Edit from "../../images/edit.png"
import PhoneInput from "react-phone-input-2";
import TimePicker from 'react-time-picker';



const EditSchedule = ({clickSave, clickClose, schedule}) =>  {
    const [scheduleData, setScheduleData] = useState([...schedule]);

    return (
        <div className="stylist-data">
                <div className="about-data">
                    <Typography component="legend">Schedule</Typography>
                    <hr/>
                    <div className="contact-data">
                        <div>
                            <p>Monday:</p>
                            <p>Tuesday:</p>
                            <p>Wednesday:</p>
                            <p>Thursday:</p>
                            <p>Friday:</p>
                            <p>Saturday:</p>
                            <p>Sunday:</p>
                        </div>

                        <div className="contact-r">
                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[0].start}
                                onChange={(e) => {
                                    scheduleData[0].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                
                                required={true}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[0].end}
                                onChange={(e) => {
                                    console.log(e === null)
                                    scheduleData[0].end = e === null ? "" : e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>
                        
                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[1].start}
                                onChange={(e) => {
                                    scheduleData[1].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[1].end}
                                onChange={(e) => {
                                    scheduleData[1].end = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>
                    
                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[2].start}
                                onChange={(e) => {
                                    scheduleData[2].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[2].end}
                                onChange={(e) => {
                                    scheduleData[2].end = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>
                        
                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[3].start}
                                onChange={(e) => {
                                    scheduleData[3].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[3].end}
                                onChange={(e) => {
                                    scheduleData[3].end = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>
                        
                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[4].start}
                                onChange={(e) => {
                                    scheduleData[4].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[4].end}
                                onChange={(e) => {
                                    scheduleData[4].end = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>

                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[5].start}
                                onChange={(e) => {
                                    scheduleData[5].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[5].end}
                                onChange={(e) => {
                                    scheduleData[5].end = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>

                        <div className='set-time'>
                            <TimePicker
                                value={scheduleData[6].start}
                                onChange={(e) => {
                                    scheduleData[6].start = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />
                            <TimePicker
                                value={scheduleData[6].end}
                                onChange={(e) => {
                                    scheduleData[6].end = e;
                                    setScheduleData(scheduleData);
                                }}
                                required={true}
                                disableClock
                            />  
                        </div>
                    </div>
                </div>
                <div className="group-btn">
                    <button className="save-btn profile-btn" onClick={() => {clickSave(scheduleData)}}>Save</button>
                    <button 
                        className="close-btn profile-btn" 
                        onClick={() => {
                            clickClose();
                        }}>
                        Close
                    </button>
                </div>
            </div>         
        </div>
    );
}

export default EditSchedule;