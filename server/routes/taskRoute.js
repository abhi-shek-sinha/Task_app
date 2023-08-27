const {Router} = require("express");
const { getTask ,saveTask, updateTask ,deleteTask,markAsComplete } = require("../controllers/taskController");

const router = Router();

router.get('/all',getTask)
// router.get("/:id", getTaskbyid )
router.post('/save', saveTask); 
router.post('/update', updateTask); 
router.post('/delete', deleteTask); 
router.post('/markAsComplete', markAsComplete); 

module.exports = router ;