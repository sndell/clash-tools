import { betterAuth } from 'better-auth';
import { APIError } from 'better-auth/api';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 3,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (user.name.length > 12 || user.name.length < 3) {
            throw new APIError('BAD_REQUEST', {
              message: 'Name must be between 3 and 12 characters',
              code: 'NAME_TOO_LONG',
            });
          }
          return {
            data: user,
          };
        },
      },
    },
  },
  trustedOrigins: ['http://192.168.0.152:3000'],
});
