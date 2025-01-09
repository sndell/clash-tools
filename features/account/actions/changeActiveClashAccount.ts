'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function changeActiveClashAccount(tag: string) {
  const cookieStore = await cookies();
  cookieStore.set('activeClashAccount', tag, { httpOnly: true });
  redirect('/');
}
