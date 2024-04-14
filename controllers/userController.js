const { findAll, findById, add, updateById, deleteById } = require('../data/users');

const listUsers = (req, res) => {
    const allUsers = findAll();
    res.status(200).json(allUsers)
}

const getUser = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);
    const userToGet = findById(numId);
    if (!!userToGet) res.status(200).json(userToGet);
    else res.status(400).send('User not found');
}

const createUser = (req, res) => {
    const userToAdd = add(req.body);
    if (!!userToAdd) {
        users.push(userToAdd);
        const hasProperLength = users.length === userToAdd.id;
        if (hasProperLength) {
            res.status(201).json(userToAdd);
        }
    }
    else {
        res.status(400).send('Error adding the user');
    }
}

const updateUser = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const updatedUser = updateById(numId, req.body);
    if (!!updatedUser) res.status(200).json(updatedUser);
    else res.status(400).send('User not found');
    
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const deletedUser = deleteById(numId);
    if (!!deletedUser) res.status(200).send('User successfully deleted');
    else res.status(400).send('User not found');
}

module.exports = {
    listUsers: listUsers,
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}