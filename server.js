const index = require('./index');
const app = index.app;
const port = 3005;

app.listen(port, () => console.log(`MVC app running on http://localhost:${port}`));