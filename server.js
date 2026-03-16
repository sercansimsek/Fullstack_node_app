import path from "node:path";
import http from "node:http";
import fs from 'node:fs/promises'

const PORT = 8000;

const __dirname = import.meta.dirname;

const pathToResource = path.join(__dirname, 'public', 'index.html');

const content = await fs.readFile(pathToResource, 'utf8');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end(content);
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
