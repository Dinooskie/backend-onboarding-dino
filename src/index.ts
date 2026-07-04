import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import userRoute from './routes/userRoute.js';

const app = new Hono();

// Daftarkan route yang sudah kita buat
// Semua request yang diawali '/users' akan diarahkan ke userRoute
app.route('/users', userRoute);

// Endpoint Health Check dasar tetap dipertahankan
app.get('/health', (c) => c.json({ status: 'Server is healthy' }, 200));

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port
});