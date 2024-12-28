"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

type Props = {
  username: string;
};

export const UserControls = ({ username }: Props) => {
  const router = useRouter();

  const logout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <>
      <button className="grid place-content-center p-3 rounded-full border transition-colors bg-primary border-primary hover:bg-primary-light">
        <span className="icon-[solar--settings-linear]" />
      </button>
      <button className="grid place-content-center p-3 rounded-full border transition-colors bg-primary border-primary hover:bg-primary-light">
        <span className="icon-[solar--repeat-linear]" />
      </button>
      <div className="flex items-center rounded-full border bg-primary border-primary">
        <div className="pr-3 pl-4 text-text-primary-dark">{username}</div>
        <button
          onClick={logout}
          className="px-3 h-full rounded-full border transition-colors bg-accent border-accent hover:bg-accent-light"
        >
          Logout
        </button>
      </div>
    </>
  );
};
