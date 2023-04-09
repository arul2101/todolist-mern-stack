import React from 'react';

const InputTodo = ({handleSubmit, todo, setTodo}) => {
    return (
        <div className="section-input-todo">
            <form action="" onSubmit={handleSubmit}>
                <input
                type="text"
                name="todo"
                maxLength="30"
                placeholder="Add a task.."
                autoComplete="off"
                value={todo}
                onChange={(event) => {
                    setTodo(event.target.value)
                }}
                />
                <button>I Got This!</button>
            </form>
        </div>
    )
}

export default InputTodo;