import { AddAccount } from '@/features/account';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AddPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect('/');

  return <AddAccount />;
}
