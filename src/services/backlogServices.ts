import { items, users } from '@prisma/client';

export type UserData = Omit<users, 'id'>;
export type ItemData = Omit<items, 'id'>;
