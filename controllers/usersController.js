const connection = require('../config/connection.js');


// async allows us to use "await"
// within a function
const createUser = async (req, res) => {
  // pull out username from incoming request body / user input
  const {username} = req.body;

  // every line of code that we put in the try block will
  // execute line by line
  // if any error happens in any of the lines, the try block
  // will immediately stop executing from that line
  // and the error that happened will be passed into the catch block
  try {
    // Placeholder values for when we don't know the value
    // await can only be called within a function that's been declared as "async"
    // what await will do is automatically call .then for us on a promise
    // nothing else will execute until this promise is done
    const [ results, fields ] = await connection.query('INSERT INTO users (username) VALUES (?);', [username]);
    res.json({
      results,
      fields,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};


module.exports = {
  createUser,
};

// /api/users?id=1&username=manny
//  const query = 'SELECT * FROM users WHERE id = ? && username = ?';

/*
fetch('')
  .then(res => res.json())
  .then(data => {
         fetch(`/${data}`)
          .then(res => res.json())
          .then(data => // do something)
  })


  const res1 = await fetch();
  const json1 = await res1.json();
  const res2 = await fetch();
  const json2 = await res2.json();

  // we need this to happen after the 1st one happens

*/