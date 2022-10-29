/**
 * It takes a SQL query and an array of parameters, and returns a promise that resolves to the result
 * of the query
 * @param sql - The SQL query to execute.
 * @param [params] - An array of values to be inserted into the query.
 * @returns A promise that will resolve to the result of the query.
 */
const executeQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

/**
 * It executes a query and returns the first row of the result
 * @param sql - The SQL query to execute.
 * @param [params] - An array of values to be inserted into the query.
 * @returns A promise that will resolve to the first row of the result set.
 */
const executeQueryOne = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        });
    });
}

module.exports = { executeQuery, executeQueryOne };