"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clashVillage } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";

export const getVillageData = async (tag: string) => {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) return { error: "Unauthorized" };

    const village = await db.select().from(clashVillage).where(eq(clashVillage.tag, tag));
    if (!village[0]) return { error: "Village not found" };

    return village[0];
  } catch (error) {
    return { error: "Internal server error" };
  }
};
