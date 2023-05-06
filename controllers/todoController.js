const connection = require('../config/connection.js');

// /api/users?userId=1
const createTodo = async (req, res) => {
  const {text} = req.body;
  const {userId} = req.query;
  const query = 'INSERT INTO todos (text, user_id) VALUES (?, ?)';

  if (!text || !userId) {
    return res.status(400).json({error: 'Text and UserId must be provided'});
  }

  try {
    const [result] = await connection.query(query, [text, userId]);
    const query2 = `SELECT *
                    FROM todos
                    WHERE id = ?;`;
    const [todos] = await connection.query(query2, [result.insertId]);
    res.json(todos[0]);
  } catch (error) {
    res.status(500).json({error});
  }

};



const getAllTodos = async (req, res) => {
//  getting all todos
//   const getTodos = 'SELECT id AS todoId, text AS todo  FROM todos;';

 //  this is going to group all the rows into 1 combined row
 //  for each data that we specify in the group by clause matches
 //  SUM, AVERAGE, COUNT, MIN, MAX
 //  Group By is normally used with Aggregate Functions built into SQL
 // const groupedTodos = 'SELECT COUNT(id) AS todosCountByUser, text, completed, id, user_id FROM todos GROUP BY user_id;';

  // will combine rows from 2 tables together where a specific field matches
  const getAllTodos = 'SELECT * FROM todos INNER JOIN users ON todos.user_id = users.id;';
  // left join , right join
  try {
    const [result] = await connection.query(getAllTodos);
    res.json(result);
  } catch (error) {
    res.status(500).json({error});
  }
};

module.exports = {
  createTodo,
  getAllTodos,
};