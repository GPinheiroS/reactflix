import React from 'react';
import './AddModal.css'

const AddModal = () => {
    const CloseModal = () =>{
        const modal:any = document.querySelector('.addModal')
        modal.classList.remove('md-show')
     }
    return (
        <div className='addModal'>
            <input type="Canal" placeholder='Nome do Canal' />
            <input type="NomeVideo" placeholder='Título do Video' />
            <input type="LinkVideo" placeholder='Link do Video' />
            <div className='btnBox'>
                <div className='btn'>
                Salvar
                </div>
                <div className='btn Cancelar' onClick={CloseModal}>
                Cancelar
                </div>
            </div>
        </div>
    );
};

export default AddModal;