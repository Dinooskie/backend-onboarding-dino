import { findAllUsers, type User } from '../repositories/userRepository.js';

export const getAllUsersService = (): User[] => {
  // Memanggil repository
  const data = findAllUsers();
  
  // Kamu bisa menambahkan business logic di sini
  // Misalnya: pastikan data tidak kosong sebelum dikembalikan
  if (!data || data.length === 0) {
    throw new Error('Data pengguna tidak ditemukan');
  }

  return data;
};