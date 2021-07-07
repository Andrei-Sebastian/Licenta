import React, { useEffect, useState }  from 'react';
import axios from 'axios';

import LayoutStylist from '../layout-hairstylist';
import Layout from '../layout';
import TextArea from '../TextArea/TextArea';
import Radio from '@material-ui/core/Radio';

const Support = () =>  {
    const [selectedValue, setSelectedValue] = useState('');
    const [text, setText] = useState("");
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(selectedValue, text);
        if(text.length > 3 && selectedValue.length > 0) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    });

    const handleClick = async () => {
        setLoading(true);
        await axios.post(`http://localhost:8080/addreport`,
        {
            text: text,
            type: selectedValue
        },
        {
            headers: {
                Authorization: localStorage.getItem("user-info"),
            }
        });
        alert(selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1) + " sent to admin!");
        setLoading(false);
        window.location.href = "/welcome";
    }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
    const children = (
        <React.Fragment>
            <div className="my-schadule">
            <h2 className="title-text-suport">Report your problem!</h2>
            <div className="div-support">
                <div>
                <label>Bug:</label>
                <Radio
                    checked={selectedValue === 'bug'}
                    onChange={handleChange}
                    value="bug"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                    size="small"
                />
                 <label>Suggestion</label>
                <Radio
                    checked={selectedValue === 'suggestion'}
                    onChange={handleChange}
                    value="suggestion"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                    size="small"
                />
                </div>
                <TextArea additionalClass="support-area"
                    description={text}
                    onChange={(e)=>setText(e.target.value)}
                />
                <br />
                <button className="send-btn" disabled={disable || loading} onClick={handleClick}>{loading ?  "Loading..." : "SEND"}</button>
            </div>
            
            </div>
        </React.Fragment>
    )
      return (
          <>
            {localStorage.getItem('role') == "stylist" ?
                <LayoutStylist>
                    {children}
                </LayoutStylist>:
                <Layout>
                    {children}
                </Layout>
            }
          </>
          
    );
}

export default Support;