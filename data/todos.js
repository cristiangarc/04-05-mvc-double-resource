const usersFunctions = require('./users');
const allUsers = usersFunctions.findAll();

let todos = [];

/**
 * Finds and returns all todo items.
 * @returns {Array} An array of all todo items.
 */
const findAll = () => { return todos; };

/**
 * Finds a todo item by its ID.
 * @param {number|string} id The ID of the todo item to find.
 * @returns {Object|null} The found todo item or null if not found.
 */
const findById = (id) => {
    todos.find(todo => todo.id === id) || null;
};

/**
 * Adds a new todo item.
 * @param {Object} todo The todo item to add. Must contain `title` and `completed` properties.
 * @returns {Object} The added todo item, including its generated ID.
 */
const add = (todo) => {
    if (!!todo.title && typeof todo.completed === 'boolean') {
        const newTodo = { ...todo };
        newTodo.id = todos.length + 1;
        newTodo.userId = allUsers[0].id;
        todos.push(newTodo);
        return newTodo;
    }
};

/**
 * Updates a todo item by its ID.
 * @param {number|string} id The ID of the todo item to update.
 * @param {Object} updateInfo An object containing the todo item properties to update.
 * @returns {Object|null} The updated todo item or null if not found.
 */
const updateById = (id, updateInfo) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) { // todo is found
        todos[index] = { ...todos[index], ...updateInfo }
        return todos[index];
    } else { // user is not found
        return null;
    }
};

/**
 * Deletes a todo item by its ID.
 * @param {number|string} id The ID of the todo item to delete.
 * @returns {Object|null} The deleted todo item or null if not found.
 */
const deleteById = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        const todoToDelete = todos[index];
        todos.splice(index, 1);
        return todoToDelete;
    } else {
        return null;
    }
};

module.exports = { findAll, findById, add, updateById, deleteById };
