const pool = require("../db");
const {
  getStudents,
  getStudentById,
  checkIfEmailExists,
  addStudent,
  updateStudent,
} = require("../queries/studentQueries");

module.exports = {
  getStudents: (req, res) => {
    pool.query(getStudents, (error, result) => {
      if (error) throw error;
      res.status(200).send(result.rows);
    });
  },

  getSpecificStudent: (req, res) => {
    const id = req.params.id;
    pool.query(getStudentById, [id], (error, result) => {
      const noStudentFound = !result.rows.length;
      if (error) throw error;
      if (noStudentFound) res.status(422).send("Student does not exist");
      res.status(200).send(result.rows);
    });
  },

  createStudent: (req, res) => {
    const { name, email, age, birthday } = req.body;
    pool.query(checkIfEmailExists, [email], (error, result) => {
      if (error) throw error;
      if (result.rows.length) res.send("email already exists");
      pool.query(addStudent, [name, email, age, birthday], (error, result) => {
        if (error) throw error;
        else res.status(200).send("Student added successfully");
      });
    });
  },

  editStudent: (req, res) => {
    const { id } = req.params;
    const { name, email, age, birthday } = req.body;
    pool.query(getStudentById, [id], (error, result) => {
      const noStudentFound = !result.rows.length;
      if (error) throw error;
      if (noStudentFound) res.status(422).send("Student does not exist");
      else
        pool.query(
          updateStudent,
          [name, email, age, birthday, id],
          (error, result) => {
            if (error) throw error;
            res.status(200).send("Student Updated");
          }
        );
    });
  },
};
