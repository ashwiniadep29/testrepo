// Import the HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log("Header", req.headers)
  console.log("Body", req.body)

  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000
const port = 80;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

