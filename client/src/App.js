import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

// Components
import InputTodo from './components/InputTodo';
import ShowTodo from './components/ShowTodo';
import ModalBox from './components/ModalBox';


const App = () => {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [modalToggle, setModalToggle] = useState(false);
  const [idTodo, setIdTodo] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001')
      .then(response => {
        setTodolist(response.data);
      })
  }, [todolist]);

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:3001/insert', { todo });
    setTodo('');
  }

  const deleteTodo = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
    setNewTodo(todo);
  }

  const clickEdit = (id) => {
    setModalToggle(!modalToggle);
    const todo = todolist[todolist.findIndex(value => value._id === id)];
    setNewTodo(todo.todo);
    setIdTodo(id);
  }

  const handleEdit = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:3001/update/${idTodo}`, { todo: newTodo });
    setModalToggle(!modalToggle);

  }
  if (modalToggle) {
      document.body.classList.add("active-modal");
  } else {
      document.body.classList.remove("active-modal");
  }

  return (
    <div className="app">
      <h1>Just Do It.</h1>

      <InputTodo
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
      />

      <div className="section-list-todo">
        {todolist.map((value, index) => (
          <div key={index}>
            <ShowTodo
              todoObj={value}
              clickEdit={clickEdit}
              deleteTodo={deleteTodo}
            />

            <ModalBox
              modalToggle={modalToggle}
              handleModalToggle={handleModalToggle}
              handleEdit={handleEdit}
              setNewTodo={setNewTodo}
              newTodo={newTodo}
            />

          </div>
        ))}
      </div>
    </div>
  )
};

export default App;
