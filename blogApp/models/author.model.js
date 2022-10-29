/* Importing the functions executeQuery and executeQueryOne from the file queries.js in the helpers
folder. */
const { executeQuery, executeQueryOne } = require('../helpers/executeQueries');


/**
 * CREATE NEW AUTHOR
 */
/**
 * It takes an object with three properties, and returns a promise that resolves to the id of the newly
 * created author
 * @returns the result of the executeQuery function.
 */
const createAuthor = ({ name, email, image }) => {
    /* Inserting the author's name, email and image into the database. */
    return executeQuery("INSERT INTO authors (name, email, image) VALUES (?,?,?)", [name, email, image,]);
};

/**
 * GET ALL AUTHORS
 */
/**
 * Get all posts from the database.
 * @returns An array of objects.
 */
const getAuthorAll = () => {
    /* Selecting all the authors from the database. */
    return executeQuery(
        "SELECT * FROM authors",
        []
    );
};

/**
 * "GET ONE AUTHOR"
 * 
*/
/**
 * Get the author by the authorId.
 * @param authorId - The authorId of the author you want to get.
 * @returns An object with the author's information and an array of posts.
 */
const getAuthorById = (authorId) => {
    /* Selecting the author with the given authorId. */
    return executeQueryOne(
        "SELECT * FROM authors AS a WHERE a.authorid = ?",
        [authorId]
    );
};

/**
 * DELETE ONE AUTHOR
 */

/**
 * It deletes an author from the database by their authorId
 * @param authorId - The id of the author to delete.
 * @returns The result of the query.
 */
const deleteAuthorById = (authorId) => {
    /* It deletes the author with the given authorId. */
    return executeQuery(
        "DELETE FROM authors AS a WHERE a.authorId = ?",
        [authorId]
    );
};

/**
 * DELETE ALL POSTS
 */

/**
 * Delete all posts from the database.
 * @returns The result of the query.
 */
const deleteAuthorAll = () => {
    /* It deletes all the authors from the database. */
    return executeQuery(
        "DELETE FROM authors",
        []
    );
};

/**
 * UPDATE ONE AUTHOR
 */

/**
 * It updates the author with the given authorId
 * @param authorId - The id of the author to update.
 * @returns The authorId is being returned.
 */
const updateAuthorById = (authorId, { name, email, image }) => {
    /* Updating the author with the given authorId. */
    return executeQuery(
        "UPDATE authors SET name = ?, email = ?, image = ? WHERE authorid=?",
        [name, email, image, authorId]
    );
};

/* Exporting the function createAuthor so that it can be used in other files. */
module.exports = {
    createAuthor, getAuthorAll, getAuthorById, deleteAuthorById, deleteAuthorAll, updateAuthorById
};