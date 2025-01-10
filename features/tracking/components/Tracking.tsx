'use client';

import { getTownHallImage } from '@/features/buildings';
import type { ClashAccount } from '@prisma/client';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getWallProgression } from '../util/getWallProgression';

type Props = {
  account: ClashAccount;
};

export const Tracking = ({ account }: Props) => {
  const [mode, setMode] = useState<'current' | 'max'>('current');

  const { resources: wallResources, progression: wallProgression } = useMemo(() => {
    return getWallProgression(JSON.parse(account.walls as string), account.townHallLevel);
  }, [account.walls, account.townHallLevel]);

  return (
    <div className="w-full px-3 mx-auto max-w-7xl">
      <div>
        <div className="bg-primary border border-primary rounded-2.5xl flex items-center">
          <Image
            src={getTownHallImage(account.townHallLevel)}
            alt="TH"
            width={128}
            height={128}
            className="object-contain aspect-square max-lg:hidden"
          />
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between w-full max-sm:flex-col">
              <div className="flex items-center gap-2 px-3 pt-3 max-sm:pb-3">
                <Image
                  src={getTownHallImage(account.townHallLevel)}
                  alt="TH"
                  width={48}
                  height={48}
                  className="object-contain aspect-square lg:hidden"
                />
                <div>
                  <div>Town Hall {account.townHallLevel}</div>
                  <div className="flex items-center gap-2 text-sm text-primary-dark">
                    {account.name} <span className="text-xs">•</span> {account.tag}
                  </div>
                </div>
              </div>
              <div className="flex gap-6 sm:pt-3 sm:pr-3 max-sm:grid max-sm:gap-0 max-sm:divide-x divide-primary max-sm:grid-cols-3 max-sm:border-y max-sm:border-primary max-sm:w-full text-primary-dark">
                <button className="flex items-center justify-center gap-2 transition-colors hover:text-primary max-sm:hover:bg-primary-light max-sm:py-3">
                  <span className="icon-[solar--refresh-linear]" /> <span className="text-sm">Refresh</span>
                </button>
                <button className="flex items-center justify-center gap-2 transition-colors hover:text-primary max-sm:hover:bg-primary-light max-sm:py-3">
                  <span className="icon-[solar--pen-outline]" /> <span className="text-sm">Configure</span>
                </button>
                <button className="flex items-center justify-center gap-2 transition-colors hover:text-primary max-sm:hover:bg-primary-light max-sm:py-3">
                  <span className="icon-[solar--square-share-line-linear]" /> <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 p-3 max-md:grid-cols-2">
              <TrackingCard title="Everything" percentage={50} />
              <TrackingCard title="Walls" percentage={wallProgression} />
              <TrackingCard title="Lab" percentage={5} />
              <TrackingCard title="Heroes" percentage={89} />
              <TrackingCard title="Buildings" percentage={7} />
              <TrackingCard title="Pets" percentage={100} />
              <TrackingCard title="Equipment" percentage={34} />
              <TrackingCard title="Supercharge" percentage={58} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackingCard = ({ title, percentage }: { title: string; percentage: number }) => {
  return (
    <div className="flex relative items-center justify-between overflow-hidden border py-2.5 px-3.5 max-sm:py-3 max-sm:px-4 rounded-full text-sm bg-background-dark border-primary">
      <div className="z-10 text-primary">{title}</div>
      <div className="z-10 text-primary-dark">{percentage.toFixed(0)}%</div>
      <div className="absolute inset-0 bg-primary-light" style={{ width: `${percentage}%` }} />
    </div>
  );
};
