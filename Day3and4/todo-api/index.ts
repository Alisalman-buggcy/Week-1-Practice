import express from "express";

const app = express();
app.use(express.json());


let tasks: { id: number; title: string }[] = [];

// middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST add task
app.post("/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
  };

  tasks.push(task);
  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== Number(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});