'use client';

import { ClashAccountsButton } from '@/features/account';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

type Props = {
  username: string;
  accounts: {
    name: string;
    tag: string;
    townHallLevel: number;
  }[];
};

export const UserControls = ({ username, accounts }: Props) => {
  const router = useRouter();

  const logout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  return (
    <>
      <button className="grid p-3 transition-colors border rounded-full place-content-center bg-primary border-primary hover:bg-primary-light">
        <span className="icon-[solar--settings-linear] max-sm:text-xl" />
      </button>
      <ClashAccountsButton accounts={accounts} />
      <div className="flex items-center border rounded-full bg-primary border-primary">
        <div className="pl-4 pr-3 truncate text-text-primary-dark max-w-40">{username}</div>
        <button
          onClick={logout}
          className="h-full px-3 transition-colors border rounded-full bg-accent border-accent hover:bg-accent-light"
        >
          Logout
        </button>
      </div>
    </>
  );
};
