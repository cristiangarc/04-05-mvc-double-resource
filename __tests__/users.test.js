const request = require('supertest');
const index = require('../index'); // Adjust this path to your Express app's entry point
const app = index.app;

// Mock data setup for users
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' }
];

// Example of resetting the mock data before each test
beforeEach(() => {
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' }
  ];
  // Here, replace the above line with the actual method
  // to reset your in-memory data to its initial state.
});

describe('User Endpoints', () => {
  it('should list all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String)
    }));
  });

  it('should create a new user', async () => {
    const newUser = {
      name: 'Jane Doe',
      email: 'jane@example.com'
    };

    const res = await request(app)
      .post('/users')
      .send(newUser);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: newUser.name,
      email: newUser.email
    }));
  });

  it('should update a user', async () => {
    const updatedUser = {
      name: 'John Updated',
      email: 'johnupdated@example.com'
    };

    const res = await request(app)
      .put('/users/1') // Assuming the user with id 1 exists
      .send(updatedUser);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.objectContaining({
      id: 1,
      name: updatedUser.name,
      email: updatedUser.email
    }));
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/users/1'); // Assuming the user with id 1 exists

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'User successfully deleted' });
  });
});
