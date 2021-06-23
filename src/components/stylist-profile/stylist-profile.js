import React, { useEffect, useState }  from 'react';
import Loading from '../Loading/Loading';
import Layout from "../layout";
import CircularImage from '../CircularImage/CircularImage';
import LeftProfile from './left-profile';
import "./profile.scss";

const StylistProfile = () =>  {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    },[]);
      return (
        <Layout>
            <LeftProfile/>
        </Layout>
    );
}

export default StylistProfile;