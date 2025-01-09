import { AccountCheck } from '@/features/account';
import { Tracking } from '@/features/tracking';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { cookies, headers } from 'next/headers';

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div className="grid flex-1 place-content-center">You are not logged in</div>;
  }

  const cookieStore = await cookies();
  const activeClashAccount = cookieStore.get('activeClashAccount');

  const account = await prisma.clashAccount.findFirst({
    where: {
      userId: session.user.id,
      tag: activeClashAccount?.value,
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
