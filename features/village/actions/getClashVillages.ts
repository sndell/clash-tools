"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clashVillage } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const getClashVillages = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) throw new Error("Unauthorized");

  const villages = await db.select().from(clashVillage).where(eq(clashVillage.userId, session.user.id));
  return villages;
};
