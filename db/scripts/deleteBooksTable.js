import {pool} from "../index.js"

const deleteTable = async () => {
  const res = await pool.query(`DROP TABLE books;`)
  console.log(res.command)
}

deleteTable()