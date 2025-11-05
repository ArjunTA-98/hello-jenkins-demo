const http = require('http');
// Revert to port 3000 to match the Security Group
const port = 3000; 

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    return res.end('OK');
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Jenkins demo!');
});

server.listen(port, () => console.log('Server running on', port));
