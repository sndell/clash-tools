import { AccountCheck } from '@/features/account';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthWrapper />
    </Suspense>
  );
}

const AuthWrapper = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div className="grid flex-1 place-content-center">You are not logged in</div>;
  }

  return (
    <div className="grid flex-1 place-content-center">
      <AccountCheck />
    </div>
  );
};
