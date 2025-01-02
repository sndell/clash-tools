import Link from 'next/link';

export const AccountCheck = () => {
  return (
    <div>
      You don&apos;t have any Clash accounts added.{' '}
      <Link href="/add" className="text-accent-light hover:text-accent">
        Add one
      </Link>
    </div>
  );
};
