const request = require('supertest');
const index = require('../index'); // Adjust this path to your Express app's entry point
const app = index.app;

describe('Todo Endpoints', () => {
  let newTodoId;

  // Example of resetting the mock data before each test
  beforeEach(async () => {
    const intialTodo = { title: 'Initial todo', completed: false };
    const response = await request(app)
    .post('/todos')
    .send(intialTodo)
    expect(response.statusCode).toBe(201);
    newTodoId = response.body.id; // Save the id for use in tests
    // Here, you should ideally replace the above line with the actual method
    // to reset your in-memory data to its initial state.
  });

  // Clean up after each test
  afterEach(async () => {
    await request(app).delete(`/todos/${newTodoId}`);
  });
  
  it('should list all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toEqual(expect.objectContaining({
      id: expect.any(Number),
      title: expect.any(String),
      completed: expect.any(Boolean),
      userId: expect.any(Number)
    }));
  });

  it('should create a new todo', async () => {
    const newTodo = {
      title: 'Test creating a todo',
      completed: true,
      userId: 1
    };

    const res = await request(app)
      .post('/todos')
      .send(newTodo);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(expect.objectContaining({
      id: expect.any(Number),
      title: newTodo.title,
      completed: newTodo.completed,
      userId: newTodo.userId
    }));
  });

  it('should update a todo', async () => {
    const updatedTodo = {
      title: 'Updated Todo',
      completed: true
    };

    const res = await request(app)
      .put('/todos/1') // Assuming the todo with id 1 exists
      .send(updatedTodo);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.objectContaining({
      id: 1,
      title: updatedTodo.title,
      completed: updatedTodo.completed
    }));
  });

  it('should delete a todo', async () => {
    const res = await request(app).delete('/todos/1'); // Assuming the todo with id 1 exists

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Todo successfully deleted' });
  });
});

