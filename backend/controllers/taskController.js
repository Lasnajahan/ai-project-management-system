let tasks = [];

const getTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    status: "pending"
  };

  tasks.push(task);
  res.json(task);
};

module.exports = {
  getTasks,
  createTask
};