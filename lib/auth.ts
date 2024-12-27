import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (user.name.length > 12 || user.name.length < 2) {
            throw new APIError("BAD_REQUEST", { message: "Name must be between 2 and 12 characters" });
          }
          return {
            data: user,
          };
        },
      },
    },
  },
});
