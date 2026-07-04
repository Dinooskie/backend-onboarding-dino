import { Hono } from 'hono';
import { getUsers } from '../controllers/userController.js';

// Membuat instance router khusus untuk urusan user
const userRoute = new Hono();

// URL: GET / (Nanti akan digabungkan menjadi /users di index.ts)
userRoute.get('/', getUsers);

export default userRoute;