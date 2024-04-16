// let users = [
//     {
//         id: 1,
//         name: 'Cristian',
//         email: 'cgarc1@me.com'
//     }
// ];

const users = [];

/**
 * Finds and returns all user items.
 * @returns {Array} An array of all user items.
 */
const findAll = () => { return users; };

/**
 * Finds a user item by its ID.
 * @param {number|string} id The ID of the user item to find.
 * @returns {Object|null} The found user item or null if not found.
 */
const findById = (id) => {
    users.find(user => user.id === id) || null;
};

/**
 * Adds a new user item.
 * @param {Object} user The user item to add. Must contain `name` and `email` properties.
 * @returns {Object} The added user item, including its generated ID.
 */
const add = (user) => {
    if (!!user.name && !!user.email) {
        if (!user.id) {
            user.id = users.length + 1;
        }
        users.push(user);
        return user;
    }
};

/**
 * Updates a user item by its ID.
 * @param {number|string} id The ID of the user item to update.
 * @param {Object} updateInfo An object containing the user item properties to update.
 * @returns {Object|null} The updated user item or null if not found.
 */
const updateById = (id, updateInfo) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) { // user is found
        users[index] = { ...users[index], ...updateInfo }
        return users[index];
    } else { // user is not found
        return null;
    }
};

/**
 * Deletes a user item by its ID.
 * @param {number|string} id The ID of the user item to delete.
 * @returns {Object|null} The deleted user item or null if not found.
 */
const deleteById = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        const userToDelete = users[index];
        users.splice(index, 1);
        return userToDelete;
    } else {
        return null;
    }
};

module.exports = { findAll, findById, add, updateById, deleteById };
