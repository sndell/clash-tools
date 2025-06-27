"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { checkExistingAccount } from "../util";
import { db } from "@/lib/db";
import { clashVillage } from "@/lib/db/schema";
import { redirect } from "next/navigation";

export const createVillage = async (data: FormattedPlayer) => {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) return { error: "Unauthorized" };

    const accountExists = await checkExistingAccount(session.user.id, data.tag);
    if (accountExists) return { error: "Village with tag already added" };

    await db.insert(clashVillage).values({
      userId: session.user.id,
      ...data,
    });
  } catch (error) {
    return { error: "Internal server error" };
  }

  return redirect("/");
};
