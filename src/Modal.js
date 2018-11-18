import React, { Component } from 'react';
import '../styles/Modal.css';

const Modal = ({data, onClose}) => {
  
  function convertToTableRows(arr){
    return arr.map((value, index) => {
      return (       
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{value.name}</td>
          <td>{value.total}</td>
        </tr>
      )
    })
  }

  const modalContent = convertToTableRows(data);
  
  return (
    <div className="modal">
      <div className="modal__content">
        <table>
          <tbody>
            {modalContent}
          </tbody>
        </table>

        <div className="modal__close" onClick={onClose}>
          <span>X</span>
        </div>
      </div>

    </div>
  )
}

export default Modal;