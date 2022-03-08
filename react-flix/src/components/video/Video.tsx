import React from 'react';
import ReactPlayer from 'react-player/youtube'
import './Video.css';
import { connect , RootStateOrAny } from 'react-redux';


const Video = ({videos}:any) => {
    
    return (
        <>
        <h2>{videos.title}</h2>
        <ReactPlayer 
        controls={true}
        url={videos.local} />
        </>
    );
};

export default connect((state:RootStateOrAny) => ({videos:state.atual}))(Video);