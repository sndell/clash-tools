'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Modal } from './Modal';
import { AnimatePresence, motion } from 'motion/react';

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Tracking' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/data', label: 'Data' },
  { href: '/bases', label: 'Bases' },
] as const;

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav>
      <button
        onClick={toggleMenu}
        className="grid p-3 transition-colors border rounded-full place-content-center bg-primary border-primary hover:bg-primary-light w-fit sm:hidden"
      >
        <span className="icon-[solar--hamburger-menu-linear] text-xl" />
      </button>
      <AnimatePresence>{isOpen && <MobileNav close={() => setIsOpen(false)} pathname={pathname} />}</AnimatePresence>
      <div className="flex gap-8 text-primary-dark max-sm:hidden">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} isActive={pathname === item.href} />
        ))}
      </div>
    </nav>
  );
};

const NavLink = ({ item, isActive, className = '' }: { item: NavItem; isActive: boolean; className?: string }) => (
  <Link
    key={item.href}
    href={item.href}
    className={`flex justify-center ${
      isActive ? 'text-primary' : 'hover:text-primary text-primary-dark transition-colors'
    } ${className}`}
  >
    {item.label}
    {isActive && (
      <motion.div
        layoutId="nav-indicator"
        className="absolute top-0 w-2 h-1 border-b border-l border-r rounded-b-full bg-accent border-accent max-sm:hidden"
      />
    )}
  </Link>
);

const MobileNav = ({ close, pathname }: { close: () => void; pathname: string }) => {
  return (
    <Modal close={close} className="w-full border rounded-[23px] border-primary bg-primary">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          item={item}
          isActive={pathname === item.href}
          className="py-3 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-b-primary"
        />
      ))}
    </Modal>
  );
};
