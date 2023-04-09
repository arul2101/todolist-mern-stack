import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { TiEdit } from 'react-icons/ti';
import { FiTrash } from 'react-icons/fi';

const ShowTodo = ({todoObj, clickEdit, deleteTodo}) => {
    return (
        <div className="row">
            <p>{todoObj.todo}</p>

            <div className="action">
                <BsCheckCircle className="checklist" onClick={(e) => { e.target.parentNode.parentNode.firstChild.style.textDecoration = 'line-through' }} />
                <TiEdit className="edit" onClick={() => { clickEdit(todoObj._id) }} />
                <FiTrash className="delete" onClick={() => { deleteTodo(todoObj._id) }} />
            </div>
        </div>
    )
}

export default ShowTodo