// Tipe data untuk User
export interface User {
  id: number;
  name: string;
  role: string;
}

// In-memory database palsu
const users: User[] = [
  { id: 1, name: 'Dwi Rahmat Dino', role: 'Admin' },
  { id: 2, name: 'Budi Santoso', role: 'Student' }
];

// Fungsi untuk mengambil semua data dari "database"
export const findAllUsers = (): User[] => {
  return users;
};