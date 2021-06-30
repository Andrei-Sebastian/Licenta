import React, { useEffect, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";



const Schedule = ({editable, clickEdit, schedule}) =>  {
    return (
        <div className="stylist-data">
            <div className="about-data">
                <div className="title-about">
                    <Typography component="legend">Schedule</Typography>
                    {editable && <div className="edit-title" onClick={clickEdit}/>}
                </div>
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
                        <p>{schedule[0].start} - {schedule[0].end}</p>
                        <p>{schedule[1].start} - {schedule[1].end}</p>
                        <p>{schedule[2].start} - {schedule[2].end}</p>
                        <p>{schedule[3].start} - {schedule[3].end}</p>
                        <p>{schedule[4].start} - {schedule[4].end}</p>
                        <p>{schedule[5].start} - {schedule[5].end}</p>
                        <p>{schedule[6].start} - {schedule[6].end}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;