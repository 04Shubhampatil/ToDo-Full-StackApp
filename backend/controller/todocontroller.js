import { Todo } from "../models/todo.model.js";

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

const addTodo = async (req, res) => {
   try {
    const { title, description } = req.body;
   const todo = new Todo({ title, description });
   await todo.save();
   res.status(201).json({ message: "todo added successfully", success: true });
   } catch (error) {
    res.status(500).json({ message: error.message, success: false });
    
   }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findById(id); 
    if (!todo) {
      return res.status(404).json({ message: "todo not found", success: false }); 
    }
    todo.title = title;
    todo.description = description;
    await todo.save();
    res.status(200).json({ message: "todo updated successfully", success: true });
  }
  catch{
    res.status(500).json({ message: error.message, success: false });

  } 
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "todo not found", success: false });
   
    } 
    await todo.deleteOne();
    res.status(200).json({ message: "todo deleted successfully", success: true });
  } 
  catch{
    res.status(500).json({ message: error.message, success: false }); 
  }
}

// ... existing deleteTodo code ...

const completeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found", success: false });
    }
    
    // Toggle the completion status
    todo.completed = !todo.completed;
    await todo.save();
    
    res.status(200).json({ 
      message: "Todo status updated successfully", 
      success: true,
      completed: todo.completed
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}

export { getTodos, addTodo, updateTodo, deleteTodo, completeTodo };


