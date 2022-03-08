import React, {FunctionComponent} from 'react';
import './SideBar.css'
import { connect , RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux'


const SideBar:FunctionComponent = ({select}:any) => {
    const dispatch = useDispatch()
    function trocarVideo(video:any){
    return{
        type: 'TROCAR_VIDEO',
        video
    }
}
    return (
        <div className='BarraSelecao'>
            {select.map( (video:any) => (
                <div key={video.id} className='selecao'>
                    <button className='selectButton' onClick={()=> dispatch(trocarVideo(video))}>{video.title}</button>
                    <input type='checkbox'></input>
                </div>
            ))}
        </div>
    );
};

export default connect((state:RootStateOrAny) => ({ select: state.select }))(SideBar);