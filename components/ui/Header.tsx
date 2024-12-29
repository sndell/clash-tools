import { AuthButton } from '@/features/auth';
import { UserControls } from '@/features/auth';
import { Navbar } from './Navbar';

type Props = {
  username?: string;
};

export const Header = ({ username }: Props) => {
  return (
    <div className="grid grid-cols-[1fr_min-content_1fr] max-lg:grid-cols-2 items-center p-3 gap-2 mx-auto w-full max-w-7xl">
      <div className="max-lg:hidden">clash.sundell.dev</div>
      <Navbar />
      <div className="flex gap-2 overflow-hidden justify-self-end">
        {username ? <UserControls username={username} /> : <AuthButton />}
      </div>
    </div>
  );
};
