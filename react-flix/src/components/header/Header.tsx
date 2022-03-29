import React from 'react';
import './Header.css'
import '../AddCanal/AddModal.css'

const Header = () => {

const OpenModal = () =>{
   const modal:any = document.querySelector('.addModal')
   modal.classList.add('md-show')
}
    return (
        <div className='header'>
            React-flix
        <div className='AddCanal' onClick={OpenModal}>
            Adicionar Canal
        </div>
        </div>
    );
};
export default Header;