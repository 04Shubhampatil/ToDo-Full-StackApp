import { ensureAuthentication } from "../middleware/auth.js";
import { Router } from "express";
import { getTodos,addTodo,updateTodo,deleteTodo } from "../controller/todocontroller.js";

const router = Router();

router.get('/gettodos',ensureAuthentication,getTodos)

router.post('/addtodos',ensureAuthentication,addTodo)

router.put('/todos/:id',ensureAuthentication,updateTodo)

router.delete('/todos/:id',ensureAuthentication,deleteTodo)

export default router;