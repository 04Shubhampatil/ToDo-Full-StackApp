import { ensureAuthentication } from "../middleware/auth.js";
import { Router } from "express";
import { getTodos,addTodo,updateTodo,deleteTodo,completeTodo } from "../controller/todocontroller.js";

const router = Router();

router.get('/gettodos',ensureAuthentication,getTodos)

router.post('/addtodos',ensureAuthentication,addTodo)

router.put('/todos/:id',ensureAuthentication,updateTodo)

router.delete('/todos/:id',ensureAuthentication,deleteTodo)

router.patch('/todos/:id/complete', ensureAuthentication, completeTodo)
export default router;