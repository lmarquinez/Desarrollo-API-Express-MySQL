const { validationResult } = require('express-validator');

/* Importing the functions from the `post.model.js` file. */
const { getPostById } = require("../models/post.model");
/* Importing the functions from the `author.model.js` file. */
const { getAuthorById } = require("../models/author.model");


/* A validation object that is used to validate the author data. */
const newAuthor = {
    /* Validating the name field, it is checking if the name field exists, and if it doesn't, it returns
    the error message. */
    name: {
        exists: true,
        /* Trimming the whitespace from the beginning and the end of the string. */
        trim: true,
        errorMessage: "The author name field is required",
    },
    /* Checking if the email field exists and if the email is valid. If it doesn't, it returns the error message. */
    email: {
        exists: {
            errorMessage: "The email field is required",
        },
        /* Trimming the whitespace from the beginning and the end of the string. */
        trim: true,
        isEmail: {
            errorMessage: "The email must be valid",
        }
    },
    /* Checking if the image field exists, and if it doesn't, it returns the error message. */
    image: {
        exists: true,
        /* Trimming the whitespace from the beginning and the end of the string. */
        trim: true,
        errorMessage: 'The image field is required'
    }
};

const newPost = {
    title: {
        /* Checking if the title field exists, and if it doesn't, it returns the error message. */
        exists: {
            errorMessage: "The post title is required",
        },
        /* Trimming the whitespace from the beginning and the end of the string. */
        trim: true,
        /* Checking if the length of the title is between 2 and 33 characters. */
        isLength: {
            options: {
                min: 2,
                max: 33
            },
            errorMessage: "Maximum character length is 33 characters, and the minimum 2.",
        },
    },
    description: {
        /* Checking if the description field exists, and if it doesn't, it returns the error message. */
        exists: {
            errorMessage: "The post description is required",
        },
        /* Trimming the whitespace from the beginning and the end of the string. */
        trim: true,
        /* Checking if the length of the description is between 10 and 255 characters. */
        isLength: {
            options: {
                min: 10,
                max: 255
            },
            errorMessage: "Maximum character length is 255 characters, and the minimum 10."
        }
    },
    category: {
        /* Checking if the description field exists, and if it doesn't, it returns the error message. */
        exists: {
            errorMessage: "The post description is required",
        },
        /* Trimming the whitespace from the beginning and the end of the string. */
        trim: true,
        /* Checking if the category is one of the following: News, Sport, Opinion, Photography, or Research. */
        custom: {
            options: (value) => {
                const arrOption = ['news', 'sport', 'opinion', 'photography', 'research']
                return arrOption.includes(value.toLowerCase());
            },
            errorMessage: 'The category must be one of the following: News, Sport, Opinion, Photography, or Research.'
        }
    }
};

/**
 * It checks if there are errors in the validation, if there are, it returns a 400 status code and the
 * errors
 * @param req - The request object.
 * @param res - The response object.
 * @param next - A function that is used to pass control to the next middleware function.
 * @returns a 400 status code and the errors.
 */
const checkError = (req, res, next) => {
    /* Checking if there are errors in the validation, if there are, it returns a 400 status code and the
    errors. */
    const errors = validationResult(req);
    /* Checking if there are errors in the validation, if there are, it returns a 400 status code and the
    errors. */
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.mapped());
    }
    /* A function that is used to pass control to the next middleware function. */
    next();
};

const checkPost = async (req, res, next) => {
    const { postId } = req.params;
    /* Checking if the post id exists. */
    if (await getPostById(postId)) {
        /* A function that is used to pass control to the next middleware function. */
        next();
    } else {
        res.send('That post does not exist')
    }
};

const checkAuthor = async (req, res, next) => {
    const { authorId } = req.params;
    /* Checking if the author id exists. */
    if (await getAuthorById(authorId)) {
        /* A function that is used to pass control to the next middleware function. */
        next();
    } else {
        res.send('That author does not exist')
    }
};

/* Exporting the functions to be used in other files. */
module.exports = {
    newAuthor, newPost, checkError, checkPost, checkAuthor
}