import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import bodyParser from 'body-parser';
import "dotenv/config"
import userRoutes from './routes/userrouter.js'
import todoRouter from './routes/todo.router.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api", userRoutes);


app.use("/todo",todoRouter)



connectDB().then(() => console.log("DB connected"));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});