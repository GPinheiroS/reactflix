import React, { useState } from 'react';
import './AddModal.css'
import { connect , RootStateOrAny, useDispatch } from 'react-redux';
import * as videoData from '../../store/videoData'


const AddModal = ({select}:any) => {
    const dispatch = useDispatch()
    const [ListaVideo, SetListaVideo]:any = useState([])

    const CloseModal = () =>{
        const modal:any = document.querySelector('.addModal')
        modal.classList.remove('md-show')
    } 

    const AddVideo = () =>{
        const inputTituloVideo:any = document.querySelector('#TituloVideo')
        const inputUrlVideo:any = document.querySelector('#LinkVideo')
        console.log('Lista de Videos:', ListaVideo)
        if(inputTituloVideo.value != '' && inputUrlVideo.value != ''){
        console.log('passou')
        let NovoVideo ={
        id: (ListaVideo.length + 1),
        title: inputTituloVideo.value,
        local: inputUrlVideo.value}
        SetListaVideo([...ListaVideo, NovoVideo])
        inputTituloVideo.value = ''
        inputUrlVideo.value=''
        }
        
            
    } 

    const SalvarCanal = () =>{
    const inputNomeCanal:any = document.querySelector('#NomeCanal')
    const inputTituloVideo:any = document.querySelector('#TituloVideo')
    const inputUrlVideo:any = document.querySelector('#LinkVideo')
    
    let NomeCanal = inputNomeCanal.value
    let TituloVideo = inputTituloVideo.value
    let UrlVideo = inputUrlVideo.value
    const novoCanal = {
        id: (select.length + 1),
            nome: NomeCanal,
                videos:[...ListaVideo]
    }
    const ListaNova = [...select, novoCanal]
    SetListaVideo([])
    inputNomeCanal.value = ''
    inputTituloVideo.value = ''
    inputUrlVideo.value=''
    CloseModal()
    return{
        type: 'SALVAR_CANAL',
        ListaNova
    }      
}
    return (
        <div className='addModal'>
            <div className='row'>
            <label htmlFor="NomeCanal">Nome do Canal</label>
            <input type="text" id='NomeCanal' placeholder='Nome do Canal' />
            </div>
            <div className='adicionarVideo'>
                <div className='row'>
                    <label htmlFor="TituloVideo">Título do Video</label>
                    <input type="text" id='TituloVideo' placeholder='Título do Video' />
                </div>
                <div className='row'>
                    <label htmlFor="LinkVideo">Link do Video</label>
                    <input type="url" id='LinkVideo' placeholder='Link do Video' />
                </div>
                <div className='btn addVideo' onClick={AddVideo}>+</div>
            </div>
            <div className='row'>
                <ul>
                {ListaVideo.map((video:any) =>(
                    <li key={video.id}>{video.title}</li>
                ))}
                </ul>
            </div>
            <div className='row'>
            <div className='btnBox'>
                <div className='btn' onClick={() => dispatch(SalvarCanal())}>
                Salvar
                </div>
                <div className='btn Cancelar' onClick={CloseModal}>
                Cancelar
                </div>
            </div>
            </div>
        </div>
    );
};

export default connect((state:RootStateOrAny) => ({select:state.select}))(AddModal);
