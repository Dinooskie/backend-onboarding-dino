import { Context } from 'hono';
import { getAllUsersService } from '../services/userService.js';

export const getUsers = async (c: Context) => {
  try {
    // Controller hanya menyuruh Service untuk bekerja
    const users = getAllUsersService();
    
    // Controller bertugas memberikan response JSON yang rapi
    return c.json({
      status: 'success',
      data: users
    }, 200);

  } catch (error: any) {
    // Jika Service menghasilkan error, Controller merespons dengan error 500
    return c.json({
      status: 'error',
      message: error.message
    }, 500);
  }
};