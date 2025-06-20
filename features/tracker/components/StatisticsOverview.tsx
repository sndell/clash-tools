"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export const StatisticsOverview = () => {
  const [showTime, setShowTime] = useState(false);

  const toggleShowTime = () => {
    navigator.vibrate(20);
    setShowTime((state) => !state);
  };

  return (
    <div className="flex overflow-hidden rounded-xl border bg-primary border-primary">
      <div className="relative flex-1">
        <AnimatePresence mode="popLayout" initial={false}>
          {showTime ? (
            <DisplayContainer key="time" title="Time" children={<TimeDisplay />} />
          ) : (
            <DisplayContainer key="resources" title="Resources" children={<ResourcesDisplay />} />
          )}
        </AnimatePresence>
      </div>
      <ToggleDisplayButton showTime={showTime} onClick={toggleShowTime} />
    </div>
  );
};

const DisplayContainer = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      className="grid place-content-center text-center gap-1.5 flex-1 absolute inset-0"
    >
      <div className="text-sm text-primary-dark">{title}</div>
      {children}
    </motion.div>
  );
};

const TimeDisplay = () => {
  return (
    <div className="flex gap-2 items-center font-bold">
      <span className="icon-[solar--clock-circle-linear]" />
      <div>7m 15d 17h</div>
    </div>
  );
};

const ResourcesDisplay = () => {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1.5">
        <Image src="/images/g.webp" alt="gold" width={24} height={24} />

        <div className="text-gradient-gold">1.6B</div>
      </div>
      <div className="flex items-center gap-1.5">
        <Image src="/images/e.webp" alt="elixir" width={24} height={24} />
        <div className="text-gradient-elixir">750M</div>
      </div>
      <div className="flex items-center gap-1.5">
        <Image src="/images/de.webp" alt="dark elixir" width={24} height={24} />
        <div className="text-gradient-dark-elixir">16M</div>
      </div>
    </div>
  );
};

const ToggleDisplayButton = ({ showTime, onClick }: { showTime: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="box-content grid place-content-center px-3 h-full border-l transition-colors cursor-pointer hover:bg-primary-light border-primary"
    >
      <motion.span
        animate={{ rotate: showTime ? 180 : 0 }}
        className="icon-[solar--sort-horizontal-linear] max-xs:text-xl"
      />
    </button>
  );
};
