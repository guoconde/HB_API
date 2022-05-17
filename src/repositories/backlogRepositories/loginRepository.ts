import bcrypt from 'bcrypt';
import { prisma } from '../../database.js';

export async function insert(password: string, user: string) {
  const hashPassword = bcrypt.hashSync(password, 8);

  const data = {
    user,
    password: hashPassword,
  };

  await prisma.users.create({ data });
}

export async function findUser(user: string) {
  const dbUser = await prisma.users.findUnique({
    where: {
      user,
    },
  });

  return dbUser;
}
