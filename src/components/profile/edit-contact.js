import React, { useEffect, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import * as FaIcons from 'react-icons/ai';
import * as BoxIcons from "react-icons/bi";
import PhoneInput from "react-phone-input-2";
import Map from "../welcome/map"



const EditContact = ({lt, lg, address, phone, mail, clickSave, clickClose}) =>  {
    const [phonee, setPhone] = useState(phone);
    const [email, setMail] = useState(mail);
    return (
        <div className="stylist-data">
                <div className="about-data">
                <div className="title-about">
                    <Typography component="legend">Contact</Typography>
                </div>
                
                <hr/>

                <div className="contact-data">
                    <div>
                        <p><BoxIcons.BiPhone />Phone:</p>
                        <p><FaIcons.AiOutlineMail />Mail:</p>
                    </div>
                    
                    <div className="contact-r">
                        <PhoneInput
                            placeholder="Enter phone number"
                            country={"ro"}
                            countryCodeEditable={false}
                            value={phone}
                            onChange={(e)=> setPhone(e)}
                        />
                            <input className="text-field" value={email} onChange={(e)=> setMail(e.target.value)}/>
                    </div>
                </div>
                <p className="info">Not the email account!</p>

                <div className="contact-data">
                        <p><BoxIcons.BiMap />Address:</p>
                        <p className="contact-r" >{address.text}</p>
                    </div>
                    <div className="show-map">
                        <Map lt={lt} lg={lg} />
                    </div>

                <div className="group-btn">
                    <button className="save-btn profile-btn" onClick={() => clickSave(phonee, email)}>Save</button>
                    <button className="close-btn profile-btn" onClick={clickClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default EditContact;