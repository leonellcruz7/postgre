const getStudents = "SELECT * FROM students";

const getStudentById = "Select * FROM students WHERE id = $1";

const addStudent =
  "INSERT INTO students (name,email,age,birthday) VALUES ($1,$2,$3,$4)";
const checkIfEmailExists = "SELECT * FROM students WHERE email = $1";

const updateStudent =
  "UPDATE students SET name = $1, email = $2, age = $3, birthday = $4 WHERE id = $5";

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  checkIfEmailExists,
  updateStudent,
};
