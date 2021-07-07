import React, { useEffect, useState }  from 'react';
import Layout from '../layout-hairstylist';
import TextArea from '../TextArea/TextArea';
import Radio from '@material-ui/core/Radio';

const Support = () =>  {
    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
      return (
        <Layout>
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
                <TextArea additionalClass="support-area"/>
                <br />
                <button className="send-btn">SEND</button>
            </div>
            
            </div>
            
        </Layout>
    );
}

export default Support;