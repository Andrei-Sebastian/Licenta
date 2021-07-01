import React, { useEffect, useState } from 'react';

import './schedule.scss';
import TimePicker from 'react-time-picker';


const Schedule = ({setSchedule}) => {
    const [scheduleData, setScheduleData] = useState([{start: "", end: ""},{start: "", end: ""},{start: "", end: ""},{start: "", end: ""},{start: "", end: ""},{start: "", end: ""},{start: "", end: ""}]);
    useEffect(() => {
        setSchedule(scheduleData);
    }, scheduleData)
    return (
        <div className="schedule">


<div className="about-data">
                    <div className="register-schedule">
                        <div>
                            <p>Monday:</p>
                            <p>Tuesday:</p>
                            <p>Wednesday:</p>
                            <p>Thursday:</p>
                            <p>Friday:</p>
                            <p>Saturday:</p>
                            <p>Sunday:</p>
                        </div>

                        <div className="schedule-r">
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
                </div>









            {/* <div className='days'>
                <div>Monday</div>
                <TimePicker
                    className='picker'
                    onChange={onChange}
                    value={value}
                    required="true"
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    value={value}
                    required="true"
                    disableClock
                />  
            </div>
            
            <div className='days'>
                <div>Tuesday</div>
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />  
            </div>
           
            <div className='days'>
                <div>Wednesday</div>
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />  
            </div>
            
            <div className='days'>
                <div>Thursday</div>
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />  
            </div>
            
            <div className='days'>
                <div>Friday</div>
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />  
            </div>

            <div className='days'>
                <div>Saturday</div>
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />  
            </div>

            <div className='days'>
                <div>Sunday</div>
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />
                <TimePicker
                    onChange={onChange}
                    required="true"
                    value={value}
                    disableClock
                />  
            </div> */}
            
        </div>
    );
}

export default Schedule;