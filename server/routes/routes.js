import express from 'express';
import {
    getTodos,
    addTodo,
    editTodo,
    deleteTodo
} from './../controllers/todoControllers.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/insert', addTodo);
router.put('/update/:id', editTodo);
router.delete('/delete/:id', deleteTodo);

export default router;
