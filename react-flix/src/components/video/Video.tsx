import React from 'react';
import ReactPlayer from 'react-player/youtube'
import './Video.css';
import { connect , RootStateOrAny } from 'react-redux';


const Video = ({atual}:any) => {
    return (
        <div className='videoBox'>
        <h2>{atual.title}</h2>
        <ReactPlayer
        width={854}
        height={480}
        controls={true}
        url={atual.local} />
        </div>
    );
};

export default connect((state:RootStateOrAny) => ({atual:state.atual}))(Video);