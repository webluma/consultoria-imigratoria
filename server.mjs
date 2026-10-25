import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname} from 'node:path';
const root = resolve('dist');
const port = Number(process.env.PORT || 3000);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg'};
http.createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    // Serve stale locale URLs directly to avoid looping through cached redirects.
    const path = resolve(root, '.' + (/^\/en\/?$/.test(pathname) ? '/' : pathname));
    if(path !== root && !path.startsWith(root + '/')) {res.writeHead(403).end(); return;}
    const file = path === root ? root + '/index.html' : path;
    const content = await readFile(file);
    res.writeHead(200, {'Content-Type':types[extname(file)] || 'application/octet-stream','Cache-Control':'no-cache'}).end(content);
  } catch {res.writeHead(404).end('Página não encontrada');}
}).listen(port, '127.0.0.1', () => console.log(`JS Consultoria Imigratória: http://localhost:${port}`));
