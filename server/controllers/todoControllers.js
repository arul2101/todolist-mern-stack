import Todo from './../models/todo.js';


export const getTodos = (req, res) => {
    Todo.find()
        .then(result => res.send(result))
        .catch(err => res.send(err));
};

export const addTodo = async (req, res) => {
    const todo = new Todo(req.body);

    try{
        await todo.save();
        res.send('inserted data');
    } catch(err) {
        console.log(err);
    }
};

export const editTodo = async (req, res) => {
    const id = req.params.id;
    const newTodo = await Todo.findByIdAndUpdate(id);

    newTodo.todo = req.body.todo;

    await newTodo.save();

    res.send('updated');
};

export const deleteTodo = async (req, res) => {
    const id = req.params.id;
    
    await Todo.findByIdAndDelete(id);

    res.send('deleted');
};