const { findAll, findById, add, updateById, deleteById } = require('../data/todos');

const listTodos = (req, res) => {
    const allTodos = findAll();
    res.status(200).json(allTodos)
}

const createTodo = (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed
    }
    todos.push(newTodo);
    const hasProperLength = todos.length === newTodo.id;
    if (hasProperLength) {
        res.status(201).json(newTodo);
    } else {
        res.status(400).send('Error adding the todo');
    }
}

const updateTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const index = todos.findIndex(todo => todo.id === numId);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...req.body }
        res.status(200).send(todos[index]);
    } else {
        console.log('Todo not found');
        res.status(400).send('Todo not found');
    }
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const index = todos.findIndex(todo => todo.id === numId);
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(200).send('Todo successfully deleted');
    } else {
        res.status(400).send('Todo not found');
    }
}

module.exports = {
    listTodos: listTodos,
    createTodo: createTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}