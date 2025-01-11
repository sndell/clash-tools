'use client';

import Image from 'next/image';
import type { ClashAccount } from '@prisma/client';
import { getTownHallImage } from '@/features/buildings';
import { featureRequirements } from '@/data/misc/featureRequirements';
import { getProgressionItems } from '../util/getProgressionItems';
import { calculatePercentage } from '../util/calculatePercentage';

export const Tracking = ({ account }: { account: ClashAccount }) => {
  const { wall, lab, pets, heroes, equipment, building, supercharge } = getProgressionItems(account);

  const stats = {
    wall: wall.upgrades,
    lab: lab.upgrades,
    building: building.upgrades,
    heroes: heroes.upgrades,
    equipment: equipment.upgrades,
    pets: pets.upgrades,
    supercharge: supercharge.upgrades,
  };

  const totalProgress = calculateTotalProgress(stats, account.townHallLevel);

  return (
    <div className="w-full px-3 mx-auto max-w-7xl">
      <div className="bg-primary border border-primary rounded-2.5xl flex items-center">
        <Image
          src={getTownHallImage(account.townHallLevel)}
          alt="TH"
          width={128}
          height={128}
          className="object-contain aspect-square max-lg:hidden"
        />
        <div className="flex flex-col flex-1">
          <AccountHeader
            townHallLevel={account.townHallLevel}
            name={account.name}
            tag={account.tag}
            onRefresh={() => {}}
            onConfigure={() => {}}
            onShare={() => {}}
          />
          <ProgressGrid stats={{ ...stats, total: totalProgress }} townHallLevel={account.townHallLevel} />
        </div>
      </div>
    </div>
  );
};

const TrackingCard = ({
  title,
  percentage,
  isAvailable = true,
}: {
  title: string;
  percentage: number;
  isAvailable?: boolean;
}) => (
  <div className="flex relative items-center justify-between overflow-hidden border py-2.5 px-3.5 max-sm:py-3 max-sm:px-4 rounded-full text-sm bg-background-dark border-primary">
    {!isAvailable && <div className="absolute inset-0 bg-black/80 z-20 grid place-content-center">Not unlocked</div>}
    <div className="z-10 text-primary">{title}</div>
    <div className="z-10 text-primary-dark">{percentage.toFixed(0)}%</div>
    <div className="absolute inset-0 bg-primary-light" style={{ width: `${percentage}%` }} />
  </div>
);

const AccountHeader = ({
  townHallLevel,
  name,
  tag,
  onRefresh,
  onConfigure,
  onShare,
}: {
  townHallLevel: number;
  name: string;
  tag: string;
  onRefresh: () => void;
  onConfigure: () => void;
  onShare: () => void;
}) => {
  const ActionButton = ({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 transition-colors hover:text-primary max-sm:hover:bg-primary-light max-sm:py-3"
    >
      <span className={`icon-[solar--${icon}]`} />
      <span className="text-sm">{label}</span>
    </button>
  );

  return (
    <div className="flex items-center justify-between w-full max-sm:flex-col">
      <div className="flex items-center gap-2 px-3 pt-3 max-sm:pb-3">
        <Image
          src={getTownHallImage(townHallLevel)}
          alt="TH"
          width={48}
          height={48}
          className="object-contain aspect-square lg:hidden"
        />
        <div>
          <div>Town Hall {townHallLevel}</div>
          <div className="flex items-center gap-2 text-sm text-primary-dark">
            {name} <span className="text-xs">•</span> {tag}
          </div>
        </div>
      </div>
      <div className="flex gap-6 sm:pt-3 sm:pr-3 max-sm:grid max-sm:gap-0 max-sm:divide-x divide-primary max-sm:grid-cols-3 max-sm:border-y max-sm:border-primary max-sm:w-full text-primary-dark">
        <ActionButton icon="refresh-linear" label="Refresh" onClick={onRefresh} />
        <ActionButton icon="pen-outline" label="Configure" onClick={onConfigure} />
        <ActionButton icon="square-share-line-linear" label="Share" onClick={onShare} />
      </div>
    </div>
  );
};

const ProgressGrid = ({
  stats,
  townHallLevel,
}: {
  stats: {
    total: number;
    wall: ProgressStats;
    lab: ProgressStats;
    building: ProgressStats;
    heroes: ProgressStats;
    equipment: ProgressStats;
    pets: ProgressStats;
    supercharge: ProgressStats;
  };
  townHallLevel: number;
}) => (
  <div className="grid grid-cols-4 grid-rows-2 gap-2 p-3 max-md:grid-cols-2">
    <TrackingCard title="Everything" percentage={stats.total} />
    <TrackingCard title="Walls" percentage={calculatePercentage(stats.wall)} />
    <TrackingCard title="Lab" percentage={calculatePercentage(stats.lab)} />
    <TrackingCard title="Buildings" percentage={calculatePercentage(stats.building)} />
    <TrackingCard
      title="Heroes"
      percentage={calculatePercentage(stats.heroes)}
      isAvailable={townHallLevel >= featureRequirements.heroes}
    />
    <TrackingCard
      title="Equipment"
      percentage={calculatePercentage(stats.equipment)}
      isAvailable={townHallLevel >= featureRequirements.equipment}
    />
    <TrackingCard
      title="Pets"
      percentage={calculatePercentage(stats.pets)}
      isAvailable={townHallLevel >= featureRequirements.pets}
    />
    <TrackingCard
      title="Supercharge"
      percentage={calculatePercentage(stats.supercharge)}
      isAvailable={townHallLevel >= featureRequirements.supercharge}
    />
  </div>
);

const calculateTotalProgress = (stats: Record<string, ProgressStats>, townHallLevel: number): number => {
  const upgrades = Object.entries(stats).reduce(
    (acc, [key, value]) => {
      if (key === 'total') return acc;
      const requirement = featureRequirements[key as keyof typeof featureRequirements];
      if (!requirement || townHallLevel >= requirement) {
        acc.completed += value.completed;
        acc.total += value.total;
      }
      return acc;
    },
    { completed: 0, total: 0 }
  );

  return calculatePercentage(upgrades);
};
