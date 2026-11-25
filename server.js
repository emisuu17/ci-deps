import { createServer } from 'node:http';
import { soma } from './soma.js';

const PORTA = Number(process.env.PORT) || 3000;

const servidor = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/soma') {
    const a = Number(url.searchParams.get('a'));
    const b = Number(url.searchParams.get('b'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ a, b, resultado: soma(a, b) }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('ci-exemplo no ar! Experimente /soma?a=2&b=3\n');
});

servidor.listen(PORTA, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor ouvindo na porta ${PORTA}`);
});