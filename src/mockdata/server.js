// This file is used to run json-server with a custom middleware 
// to simulate the login logic you had in your store.

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.post('/login', (req, res) => {
    // In a real application, you would check credentials against a database.
    // Here, we check against the mock nurse data stored in db.json.
    
    // We expect { username: '...', password: '...' } in the request body
    const { username, password } = req.body;
    
    // Get the mock nurse data from the database
    const db = router.db; // lowdb instance
    const mockNurse = db.get('nurse').value()[0]; // Assuming only one nurse object

    if (mockNurse && mockNurse.username === username && mockNurse.password === password) {
        // Successful login
        // In a real app, this would return a JWT token, but here we return the user data.
        res.jsonp({ 
            success: true, 
            nurse: {
                id: mockNurse.id,
                username: mockNurse.username,
                email: mockNurse.email
            }
        });
    } else {
        // Failed login
        res.status(401).jsonp({ success: false, message: "Invalid username or password" });
    }
});

// To parse POST requests
server.use(jsonServer.bodyParser);

// Use the default JSON Server router
server.use(router);

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
    console.log('Endpoints: /nurse, /patients, /patientRecords. /appointments');
    console.log('Custom Login: POST /login');
});

// NOTE: You must install dependencies first: 'npm install'
// Then run the server with: 'npm start'
