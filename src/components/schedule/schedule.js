import React, { useState } from 'react';

import './schedule.scss';
import TimePicker from 'react-time-picker';


const Schedule = ({aditionalClass}) => {
    const [value, onChange] = useState('10:00');

    return (
        <div className="schedule">
            <div className='days'>
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
            </div>
            
        </div>
    );
}

export default Schedule;