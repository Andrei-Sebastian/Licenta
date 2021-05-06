import React from 'react';

import Layout from '../layout';
import Schadule from './schedule';

const profile = () => {
    return(
        <>
            <Layout/>
            <Schadule/>
            <div>
                <div>
                    <label>Nume</label>
                    <input type='text' />
                </div>

                <div>
                    <label>Prenume</label>
                    <input type='text' />
                </div>

                <div>
                    <label>Nume</label>
                    <input type='text' />
                </div>
            </div>

        </>
    );
}

export default profile;