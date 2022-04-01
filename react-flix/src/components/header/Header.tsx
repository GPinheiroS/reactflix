import React from 'react';
import './Header.css'
import { connect , RootStateOrAny } from 'react-redux';


const Header = ({select}:any) => {

const OpenModal = () =>{
   const modal:any = document.querySelector('.addModal')
   modal.classList.add('md-show')
}
const ShowEdit = () =>{
    const canais:any = document.querySelectorAll('.selecao')
    // canais.map( (canal:any) =>(
    //     console.log(canal)
    // ))
    for (let index = 0; index < select.length; index++) {
        let btnBox = canais[index].firstChild.nextSibling
        btnBox.classList.toggle('btnShow')
    }

    

 }
    return (
        <div className='header'>
            React-flix
        <div className='HeaderBtnBox'>
        <div className='btn AddCanal' onClick={OpenModal}>
            Adicionar Canal
        </div>
        <div className='btn AddCanal' onClick={ShowEdit}>
            Editar Canais
        </div>
        </div>
        </div>
    );
};
export default connect((state:RootStateOrAny) => ({ select: state.select }))(Header);