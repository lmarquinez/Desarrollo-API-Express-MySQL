/* It's importing the functions `executeQuery` and `executeQueryOne` from the file `executeQueries.js` in the
`helpers` folder. */
const { executeQuery, executeQueryOne } = require('../helpers/executeQueries');

/**
 * CREATE NEW POST
 */
/**
 * It takes an object with the properties title, description, date_create, category, and authorId, and
 * inserts them into the posts table
 * @returns The result of the query.
 */
const createPost = ({ title, description, category, authorId }) => {
    /* It's inserting a new post into the database. */
    return executeQuery(
        "INSERT INTO posts (title, description, category, authorid) VALUES (?,?,?,?)",
        [title, description, category, authorId]
    );
};

/**
 * GET ALL POSTS
 */
/**
 * Get all posts from the database.
 * @returns An array of objects.
 */
const getPostAll = () => {
    /* It's selecting all the posts from the posts table and joining them with the authors table. */
    return executeQuery(
        "SELECT * FROM posts AS p INNER JOIN authors AS a ON p.authorid = a.authorid",
        []
    );
};

/**
 * "GET ONE POST"
 */

/**
 * It's selecting a post from the database with the given postId
 * @param postId - The id of the post to be retrieved.
 * @returns It's returning a post from the database with the given postId.
 */
const getPostById = (postId) => {
    /* It's selecting a post from the database with the given postId. */
    return executeQueryOne(
        "SELECT * FROM posts AS p INNER JOIN authors AS a ON p.authorId = a.authorId WHERE p.postid = ?",
        [postId]
    );
};

/**
 * DELETE ONE POST
 */
/**
 * Delete a post by its id.
 * @param postId - The id of the post to delete.
 * @returns An array of objects.
 */
const deletePostById = (postId) => {
    /* It's deleting a post from the database with the given postId. */
    return executeQuery(
        "DELETE FROM posts AS p WHERE p.postid = ?",
        [postId]
    );
};

/**
 * DELETE ALL POSTS
 */

/**
 * Delete all posts from the database.
 * @returns The result of the query.
 */
const deletePostAll = () => {
    /* It's deleting all the posts from the database. */
    return executeQuery(
        "DELETE FROM posts",
        []
    );
};

/**
 * UPDATE ONE POST
 */

/**
 * It updates a post in the database with the given postId
 * @param postId - The id of the post to update.
 * @returns The result of the query.
 */
const updatePostById = (postId, { title, description, date_create, category, authorId }
) => {
    /* It's updating a post in the database with the given postId */
    return executeQuery(
        "UPDATE posts SET title = ?, description = ?, date_create = ?, category = ?, authorid = ? WHERE postid=?",
        [title, description, date_create, category, authorId, postId]
    );
};

/**
 * "GET ALL POSTS BY AN AUTHOR"
 * 
 * The first line of the function is a comment. It's a good idea to include comments in your code to
 * help other developers understand what your code is doing
 * @param authorId - The authorId of the author whose posts we want to retrieve.
 * @returns An array of objects.
 */
const getPostByAuthor = (authorId) => {
    /* It's a query that selects all the posts from the posts table and joins them with the authors table. */
    return executeQuery(
        "SELECT * FROM posts AS p INNER JOIN authors AS a ON a.authorId = p.authorId WHERE a.authorId = ?",
        [authorId]
    );
};

/* Exporting the functions so that they can be used in other files. */
module.exports = {
    createPost, getPostAll, getPostById, deletePostById, deletePostAll, updatePostById, getPostByAuthor
};
