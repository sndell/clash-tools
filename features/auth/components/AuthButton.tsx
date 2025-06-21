"use client";

import { signIn, signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const AuthButton = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn.social({ provider: "google" });
  };

  const handleSignOut = async () => {
    router.refresh();
    await signOut();
  };

  const { data: session, isPending } = useSession();

  if (session)
    return (
      <div className="flex gap-3 items-center pl-3 rounded-xl border bg-primary border-primary">
        {session.user.username ?? "Clasher"}
        <button
          onClick={handleSignOut}
          className="box-content flex justify-center items-center px-3 h-full text-center rounded-xl border transition-colors cursor-pointer bg-accent border-accent hover:bg-accent-light"
        >
          {isPending ? <span className="icon-[svg-spinners--3-dots-move]" /> : "Logout"}
        </button>
      </div>
    );

  return (
    <button
      onClick={handleSignIn}
      className="flex justify-center items-center px-3 w-16 rounded-xl border transition-colors cursor-pointer hover:bg-accent-light bg-accent border-accent max-xs:px-4"
    >
      {isPending ? <span className="icon-[svg-spinners--3-dots-move]" /> : "Login"}
    </button>
  );
};
