import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Khaled',
    email: 'khaled@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mohamed',
    email: 'mohamed@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
