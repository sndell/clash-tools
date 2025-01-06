import { AuthButton } from '@/features/auth';
import { UserControls } from '@/features/auth';
import { Navbar } from './Navbar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Suspense } from 'react';

export const Header = async () => {
  return (
    <div className="grid grid-cols-[1fr_min-content_1fr] max-lg:grid-cols-2 items-center p-3 gap-2 mx-auto w-full max-w-7xl">
      <div className="max-lg:hidden">clash.sundell.dev</div>
      <Navbar />
      <div className="flex gap-2 overflow-hidden justify-self-end">
        <Suspense
          fallback={
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full bg-primary animate-pulse" />
              <div className="w-12 h-12 rounded-full bg-primary animate-pulse" />
              <div className="h-12 w-40 rounded-full bg-primary animate-pulse" />
            </div>
          }
        >
          <AuthWrapper />
        </Suspense>
      </div>
    </div>
  );
};

const AuthWrapper = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const username = session?.user.name;
  return username ? <UserControls username={username} /> : <AuthButton />;
};
