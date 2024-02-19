let users = [];

/**
 * Finds and returns all user items.
 * @returns {Array} An array of all user items.
 */
const findAll = () => {};

/**
 * Finds a user item by its ID.
 * @param {number|string} id The ID of the user item to find.
 * @returns {Object|null} The found user item or null if not found.
 */
const findById = (id) => {};

/**
 * Adds a new user item.
 * @param {Object} user The user item to add. Must contain `name` and `email` properties.
 * @returns {Object} The added user item, including its generated ID.
 */
const add = (user) => {};

/**
 * Updates a user item by its ID.
 * @param {number|string} id The ID of the user item to update.
 * @param {Object} updateInfo An object containing the user item properties to update.
 * @returns {Object|null} The updated user item or null if not found.
 */
const updateById = (id, updateInfo) => {};

/**
 * Deletes a user item by its ID.
 * @param {number|string} id The ID of the user item to delete.
 * @returns {Object|null} The deleted user item or null if not found.
 */
const deleteById = (id) => {};

module.exports = { findAll, findById, add, updateById, deleteById };
