const { Router } = require("express");
const router = Router();
const {
  getStudents,
  getSpecificStudent,
  createStudent,
  editStudent,
  test,
} = require("../controller/studentController");

router.get("/test", test);
router.get("/", getStudents);
router.post("/", createStudent);
router.get("/:id", getSpecificStudent);
router.put("/:id", editStudent);

module.exports = router;
