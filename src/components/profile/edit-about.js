import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';



const EditAbout = ({text, clickSave, clickClose}) =>  {
    const [textData, setTextData] = useState(text);
    return (
        <div className="stylist-data">
                <div className="about-data">
                <div className="title-about">
                    <Typography component="legend">About</Typography>
                </div>
                
                <hr/>

                <div className="contact-data">
                    <textarea id="w3review" name="w3review" rows="4" cols="50" value={textData} onChange={(e) => setTextData(e.target.value)}/>
                </div>

                <div className="group-btn">
                    <button className="save-btn profile-btn" onClick={() => {clickSave(textData)}}>Save</button>
                    <button className="close-btn profile-btn" onClick={clickClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default EditAbout;