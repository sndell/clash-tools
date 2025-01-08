import { AccountCheck } from '@/features/account';
import { Tracking } from '@/features/tracking';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div className="grid flex-1 place-content-center">You are not logged in</div>;
  }

  const account = await prisma.clashAccount.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  if (!account) {
    return (
      <div className="grid flex-1 place-content-center">
        <AccountCheck />
      </div>
    );
  }

  return <Tracking account={account} />;
}
