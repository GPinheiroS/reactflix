import React, {FunctionComponent, useState} from 'react';
import './SideBar.css'
import { connect , RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux'


let aberto:boolean = false
// const ToggleVideoMenu = (e:any) =>{ 
//     const menu = e.target.nextSibling.firstChild
//     if(e){
//         aberto= !aberto
//     }
//     if(aberto === true){
//         menu.style.display = "block"
//     } else { menu.style.display = "none"}
// }

const SideBar:FunctionComponent = ({select}:any) => {
    const [accordionArray, setAccordion] = useState(Array(select.length).fill(false))

    const ToggleVideoMenu = (index:number) =>{
        const newArray = [...accordionArray]
        newArray[index] = !newArray[index] 
        setAccordion(newArray); 
    }

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
            {select.map( (youtuber:any, index:number) => (
                <li key={youtuber.id} className='selecao'>
                    <button className='selectButton' onClick={()=>ToggleVideoMenu(index)}>{youtuber.nome}</button>
                    <div className={accordionArray[index]? 'menuVideo open':  'menuVideo'}>
                    <ul>
                    {youtuber.videos.map( (videos:any)  => (
                        <li key={videos.id} className='selectButton' onClick={()=> dispatch(trocarVideo(videos))}>{videos.title}
                        </li>
                    ))}
                    </ul>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default connect((state:RootStateOrAny) => ({ select: state.select }))(SideBar);