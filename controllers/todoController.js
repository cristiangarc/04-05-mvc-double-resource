const { findAll, findById, add, updateById, deleteById } = require('../data/todos');

const listTodos = (req, res) => {
    const allTodos = findAll();
    res.status(200).json(allTodos)
}

const getTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const todoToGet = findById(numId);
    if (!!todoToGet) res.status(200).json(todoToGet);
    else res.status(404).send('Todo not found');
}

const createTodo = (req, res) => {
    const todoToAdd = add(req.body);
    if (!!todoToAdd) {
        const todoUserId = todoToAdd.userId;
        if (typeof todoUserId === 'number') {
            res.status(201).json(todoToAdd);
        }
    }
    else {
        res.status(400).send('Failed to add todo: Missing or invalid data');
    }
}

const updateTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const updatedTodo = updateById(numId, req.body);
    if (!!updatedTodo) res.status(200).json(updatedTodo);
    else res.status(404).send('Todo not found');
    
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const deletedTodo = deleteById(numId);
    if (!!deletedTodo) res.status(200).send('Todo successfully deleted');
    else res.status(404).send('Todo not found');
}

module.exports = {
    listTodos: listTodos,
    getTodo: getTodo,
    createTodo: createTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}