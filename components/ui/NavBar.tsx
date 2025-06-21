"use client";

import { cn } from "@/util/cn";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Tracking", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Data", href: "/data" },
] as const;

export const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="grid place-content-center p-3 rounded-xl border cursor-pointer xs:hidden bg-primary border-primary"
      >
        <span className="icon-[solar--hamburger-menu-linear] text-xl" />
      </button>
      <AnimatePresence>{isOpen && <MobileNav close={() => setIsOpen(false)} pathname={pathname} />}</AnimatePresence>
      <div className="flex gap-8 max-xs:hidden">
        {NAV_ITEMS.map((link) => (
          <NavLink key={link.href} {...link} isActive={link.href === pathname} />
        ))}
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  label,
  isActive,
  isMobile,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "flex",
      isActive ? "text-primary" : "transition-colors text-primary-dark hover:text-primary",
      isMobile ? "p-3" : "justify-center"
    )}
  >
    {label}
    <AnimatePresence>{isActive && <NavIndicator />}</AnimatePresence>
  </Link>
);

const NavIndicator = () => (
  <motion.div
    layoutId="nav-indicator"
    className="absolute top-0 z-10 w-2 h-1 rounded-b-full border-r border-b border-l bg-accent border-accent max-xs:hidden"
  />
);

const MobileNav = ({ close, pathname }: { close: () => void; pathname: string }) =>
  createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      onClick={close}
      className="absolute top-0 left-0 z-50 w-full h-full bg-black/50"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        exit={{ width: 0 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="overflow-hidden rounded-r-xl border-r divide-y h-dvh bg-primary border-primary divide-primary"
      >
        <div className="flex relative justify-center items-center p-3">
          <Logo />
        </div>
        {NAV_ITEMS.map((link) => (
          <NavLink key={link.href} {...link} isActive={link.href === pathname} isMobile onClick={close} />
        ))}
      </motion.div>
    </motion.div>,
    document.body
  );
