import React, {FunctionComponent, useState} from 'react';
import './SideBar.css'
import { connect , RootStateOrAny } from 'react-redux';
import { useDispatch } from 'react-redux'


let aberto:boolean = false

const SideBar:FunctionComponent = ({select}:any) => {
    const [accordionArray, setAccordion] = useState(Array(select.length).fill(false))
    const [ListaVideo, SetListaVideo]:any = useState([])

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
    function apagarCanal(canal:any){
        let posicao = 0
        let ListaNova = select
        for (let index = 0; index < select.length; index++) {
            if(ListaNova[index].id === canal.id){
                posicao = index
                break;
            }
        }
        ListaNova.splice(posicao, 1)
        console.log(ListaNova)
        return{
            type: 'REMOVER_CANAL',
            ListaNova
        }
    }
    return (
        <div className='sideBar'>
        <ul className='barraSelecao'>
            {select.map( (youtuber:any, index:number) => (
                <li key={youtuber.id} className='selecao'>
                    <button className='selectButton' onClick={()=>ToggleVideoMenu(index)}>{youtuber.nome}
                    </button>
                    <div className='btnBoxCanal'>
                    <button className='btnCanal apagarCanal' onClick={()=>dispatch(apagarCanal(youtuber))}>X</button>
                    <button className='btnCanal editar'>E</button>
                    </div>
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