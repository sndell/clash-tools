import { db } from "@/lib/db";
import { clashVillage } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";

export const checkExistingAccount = async (userId: string, formattedTag: string): Promise<boolean> => {
  const existingAccounts = await db
    .select()
    .from(clashVillage)
    .where(and(eq(clashVillage.userId, userId), eq(clashVillage.tag, formattedTag)));

  return existingAccounts.length > 0;
};
