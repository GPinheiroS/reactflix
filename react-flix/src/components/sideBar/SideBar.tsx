import React, {FunctionComponent} from 'react';
import './SideBar.css'
import { connect , RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux'
import { isVisible } from '@testing-library/user-event/dist/utils';

let aberto:boolean = false
const ToggleVideoMenu = (e:any) =>{ 
    const menu = e.target.nextSibling.firstChild
    if(e){
        aberto= !aberto
    }
    console.log(aberto)
    if(aberto === true){
        menu.style.display = "block"
    } else { menu.style.display = "none"}
}
    

const SideBar:FunctionComponent = ({select}:any) => {
    const dispatch = useDispatch()
    function trocarVideo(video:any){
    return{
        type: 'TROCAR_VIDEO',
        video
    }
}
    return (
        <div className='sideBar'>
        <ul className='barraSelecao'>
            {select.map( (youtuber:any) => (
                <li key={youtuber.id} className='selecao'>
                    <button className='selectButton' onClick={(e) => ToggleVideoMenu(e)}>{youtuber.nome}</button>
                    <div className='menuVideo'>
                    <ul>
                    {youtuber.videos.map( (videos:any)  => (
                        <li key={videos.id} className='selectButton' onClick={()=> dispatch(trocarVideo(videos))}>{videos.title}
                        </li>
                    ) )}

                    </ul>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default connect((state:RootStateOrAny) => ({ select: state.select }))(SideBar);