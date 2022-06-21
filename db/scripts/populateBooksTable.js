// import { pool } from "../index.js";
// import { books } from "../../libs/data.js";

// async function  populateBooksTable() {
//     for (let i = 0; i < books.length; i++) {
//         const res = await pool.query(
//             `INSERT INTO books (author_id, title) VALUES ($1, $2);`,
//             [books[i].author_id, books[i].title]
//         );
//      console.log(`populated with ${books[i].title}`);  
//     }
// }

// populateBooksTable();


import {pool} from '../index.js'
import {books} from '../../libs/data.js'

const populateBooksTable = async () => {
  for (let i =0; i < books.length; i++) {
      const res = await pool.query(
          `INSERT INTO books (author_id, title, publishedDate) VALUES ($1,$2,TO_DATE($3,'DD/MM/YYYY'));`,
          [books[i].author_id, books[i].title,books[i].publishedDate ]
      );
      console.log(`populated with ${books[i].title}`);
  }
};

populateBooksTable();

