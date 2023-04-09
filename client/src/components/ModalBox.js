import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalBox = ({ modalToggle, handleModalToggle, handleEdit, setNewTodo, newTodo }) => {
    return (
        <>
            {modalToggle && (
            <div className="modal">
                <div className="overlay" onClick={handleModalToggle}></div>
                <div className="modal-content">
                    <h3>Edit Todo</h3>
                    <form onSubmit={handleEdit}>
                        <input
                            type="text"
                            placeholder='Edit Todo..'
                            maxLength="30"
                            onChange={(e) => { setNewTodo(e.target.value) }}
                            value={newTodo}
                            required
                            autoFocus
                        /><br /><br />
                        <button type='submit' className='save-edit-btn'>Save</button>
                    </form>
                    <AiOutlineCloseCircle className='close-modal' onClick={handleModalToggle} />
                </div>
            </div>)}
        </>
    )
};

export default ModalBox;