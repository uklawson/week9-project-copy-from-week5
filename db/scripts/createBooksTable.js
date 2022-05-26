import { pool } from "../index.js";

//const sqlString = `CREATE TABLE IF NOT EXISTS books (book_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author_id INT, title TEXT);`;
const sqlString = 'SELECT * FROM books;'
async function createBooksTable() {
    const res = await pool.query(sqlString);
    //console.log("created books table");
    console.log(res)
}

createBooksTable();