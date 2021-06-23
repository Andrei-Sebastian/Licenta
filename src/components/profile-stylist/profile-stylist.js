import React from 'react';

import Layout from '../layout';
import Schedule from '../schedule/schedule';

const profile = () => {
    return(
        <>
            <Layout/>
            <Schedule/>
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