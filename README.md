
### Exercise: Managing Multiple Resources in Express with Data Modules

#### Objective
Enhance your Express application to manage two resources, Todos and Users, using a structured MVC architectural pattern. This exercise focuses on implementing data management through separate modules, ensuring controllers can access and manipulate shared data with up-to-date integrity.

#### Resources
- **Todos**: Tasks that need completion.
- **Users**: Individuals assigned to todos.

#### Requirements

1. **Project Setup:**
   - Use the existing Node.js project with Express.
   - Ensure `index.js` defines the Express app logic.
   - `server.js` should import the Express app and configure the server.

### Expanded Explanation on Data Modules Implementation

#### Step 2: Data Modules Implementation

In this step, we're creating a structured approach to manage application data, similar to how `useContext` in React provides a way to share data across components. Just as `useContext` allows React components to access and modify shared data without prop drilling, our data modules in Express will enable different parts of our backend application (controllers, in particular) to interact with shared data (todos and users) seamlessly.

- **Create a `data` directory**: This directory will act as a centralized location for managing the data of your application, akin to a global state container in a React app using `useContext`.

- **Implement `todos.js` and `users.js` within `data`**: Each file will manage its respective data array (todos and users) and provide utility functions for CRUD operations. This structure is similar to creating a context in React to manage and provide access to a stateful value (like user data) across different components.

    **Example `todos.js`:**

    ```javascript
    let todos = []; // Simulated database table for todos

    const addTodo = (todo) => {
      const newTodo = { id: Date.now(), ...todo };
      todos.push(newTodo);
      return newTodo;
    };

    const findTodo = (id) => todos.find(todo => todo.id === id);

    // Exporting CRUD operations
    module.exports = { addTodo, findTodo, /* other CRUD operations */ };
    ```

    **Example `users.js`:**

    ```javascript
    let users = []; // Simulated database table for users

    const addUser = (user) => {
      const newUser = { id: Date.now(), ...user };
      users.push(newUser);
      return newUser;
    };

    const findUser = (id) => users.find(user => user.id === id);

    // Exporting CRUD operations
    module.exports = { addUser, findUser, /* other CRUD operations */ };
    ```

- **Controllers Use Data Modules**: Controllers, responsible for handling incoming requests and returning responses, will import these data modules. This setup enables controllers to manipulate the application's data without directly accessing or modifying the data arrays, promoting a clean separation of concerns and modular architecture.

By structuring your data management this way, you're achieving a level of abstraction and encapsulation similar to using context in React. It ensures that your application's data logic is centralized, making the data easy to access and manipulate across your backend system while keeping the server's routes and controllers clean and focused on their primary responsibilities.

This expanded explanation aims to bridge the conceptual gap between managing shared data in a React frontend using `useContext` and managing shared data in an Express backend using modular data files. Both approaches emphasize the importance of centralized data management and accessibility across different parts of the application, facilitating maintenance and scalability.

~Editor's Note~
However, note that this example only serves to illustrate the concept of data modules in Express. In a real-world application, you'd likely use a database or an ORM (Object-Relational Mapping) library to manage your data, rather than storing it in memory as shown here.


3. **Controller Implementation:**
   - Use the `controllers` directory for `todoController.js` and `userController.js`.
   - Implement CRUD operations in each controller, utilizing functions from the data modules for data manipulation.
   - Ensure `todoController` validates the existence of a `userId` with `users` data before creating a todo.

4. **Setup Routes:**
   - Use the `routes` directory for `todoRoutes.js` and `userRoutes.js`.
   - Define CRUD operation routes for both todos and users.

5. **Integrate Routes and Data Modules into Express App:**
   - In `index.js`, import the routes and use them with your Express app instance to manage both resources effectively.

6. **Server Configuration:**
   - Configure the app in `server.js` to listen on port 3000.

#### Data Structure

- **Todo Item**: Include `id`, `title`, `completed`, and `userId`.
- **User**: Include `id`, `name`, and `email`.

#### Storing Data In Memory with Data Modules

- `todos.js` and `users.js` in the `data` directory should export the data arrays and functions for data operations.
- Controllers should import these modules to access and manipulate data, maintaining the latest state across the application.

#### Testing Your Implementation

- Ensure tests cover CRUD operations for both resources and validate the `userId` in todo creation.
- Verify data integrity and relationships between users and todos in your tests.

### Running the Tests

1. **Install Requirements**
   - We have to start with installing our test packages as development dependencies
   - The packages we want to use are `jest` and `supertest`
   - We can install packages as dev dependencies by including a `--save-dev` flag when running the install command (like `npm i --save-dev <your packages>`)
   - With this information, what would the command to install `jest` and `supertest` as dev dependencies look like?
2. **Update the package.json scripts**
   - If you've done things right, you should have a package.json file in your project with `express` and `cors` as dependencies, and `jest` and `supertest` as dev dependencies.
   - In the scripts section of the package.json, we want to update our test script to run `jest` instead of the default `echo whatever and all that`
3. **Run the tests**
   - From here, if all has gone well, you can run the tests by running `npm test`
4. **Validate Correctness**
   - Make sure that the tests pass, examine each test case and ensure that everything is passing, and if not, that you understand the errors that are happening and have a sense of how to fix it


### Experiment

- Add more complex operations, such as filtering todos by user or completion status.
- Explore adding middleware for data validation or authentication.

### Submission Guidelines

- Update your GitHub repository with the enhanced project structure.
- Ensure `package.json` reflects all dependencies accurately.
- Make the PR on Github.

---

This exercise challenges students to scale their Express application to manage multiple resources efficiently, using the MVC pattern to ensure clean separation of concerns and maintainable code structure. It encourages hands-on practice with real-world scenarios, such as associating resources and performing complex data manipulations.
