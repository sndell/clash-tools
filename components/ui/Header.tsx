import { AuthButton } from '@/features/auth';
import { UserControls } from '@/features/auth';
import { Navbar } from './Navbar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Suspense } from 'react';
import { prisma } from '@/lib/prisma';
import { Session } from '@/lib/auth-client';

export const Header = async () => {
  return (
    <div className="grid grid-cols-[1fr_min-content_1fr] max-lg:grid-cols-2 items-center p-3 gap-2 mx-auto w-full max-w-7xl">
      <div className="max-lg:hidden">clash.sundell.dev</div>
      <Navbar />
      <div className="flex gap-2 overflow-hidden justify-self-end">
        <Suspense
          fallback={
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full max-sm:w-12 max-sm:h-12 bg-primary animate-pulse" />
              <div className="w-10 h-10 rounded-full max-sm:w-12 max-sm:h-12 bg-primary animate-pulse" />
              <div className="w-40 h-10 rounded-full max-sm:h-12 bg-primary animate-pulse" />
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

  return session ? <UserControlsWrapper session={session} /> : <AuthButton />;
};

const UserControlsWrapper = async ({ session }: { session: Session }) => {
  const accounts = await prisma.clashAccount.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      name: true,
      tag: true,
      townHallLevel: true,
    },
  });

  return <UserControls username={session.user.name} accounts={accounts} />;
};
