'use client';

import { useEffect, useState } from 'react';
import { verifyAccount } from '../actions';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { AddFormSchema, AddFormValues } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/form/Input';
import { allBuildings } from '@/data/structures';

export const AddForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<FormattedPlayer | null>(null);
  const [isSettingLevels, setIsSettingLevels] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<AddFormValues>({ resolver: zodResolver(AddFormSchema) });

  const onSubmit = async (data: AddFormValues) => {
    setIsLoading(true);
    const result = await verifyAccount(data.tag, data.token);

    if (result.error || !result.data) {
      setError('token', { message: 'Invalid API Token or Tag' });
      setError('tag', { message: 'Invalid API Token or Tag' });
      setIsLoading(false);
      return;
    }

    setPlayer(result.data);
    setIsLoading(false);
  };

  const clearPlayer = () => {
    setPlayer(null);
    reset();
  };

  const toggleIsSettingLevels = () => setIsSettingLevels(!isSettingLevels);

  return (
    <div className="flex flex-col flex-1 w-full gap-3 px-3 pb-3 mx-auto overflow-hidden max-w-7xl">
      <div className="flex flex-col flex-1 p-3 border rounded-2.5xl bg-primary border-primary overflow-hidden">
        <HeaderBanner isSettingLevels={isSettingLevels} />
        {isSettingLevels && player ? (
          <BuildingLevels townHallLevel={player.townHallLevel} />
        ) : (
          <AccountForm
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            isLoading={isLoading}
            player={player}
            clearPlayer={clearPlayer}
          />
        )}
        <FooterActions
          isSettingLevels={isSettingLevels}
          player={player}
          toggleSettingLevels={toggleIsSettingLevels}
          clearPlayer={clearPlayer}
        />
      </div>
    </div>
  );
};

const FooterActions = ({
  isSettingLevels,
  player,
  toggleSettingLevels,
  clearPlayer,
}: {
  isSettingLevels: boolean;
  player: FormattedPlayer | null;
  toggleSettingLevels: () => void;
  clearPlayer: () => void;
}) => (
  <div className="flex items-end w-full pt-3 mx-auto max-w-96">
    {!isSettingLevels ? (
      <button
        disabled={!player}
        onClick={toggleSettingLevels}
        className="w-full py-2 border rounded-full button-accent bg-accent border-accent enabled:hover:bg-accent-light disabled:opacity-50"
      >
        Set building levels
      </button>
    ) : (
      <div className="flex w-full gap-3">
        <button
          onClick={clearPlayer}
          className="grid p-3 border rounded-full place-items-center bg-background hover:bg-primary-light border-primary"
        >
          <span className="icon-[solar--trash-bin-minimalistic-outline]" />
        </button>
        <button
          onClick={toggleSettingLevels}
          disabled={!player}
          className="flex-1 py-2 border rounded-full button-accent bg-accent border-accent enabled:hover:bg-accent-light disabled:opacity-50"
        >
          Finish
        </button>
      </div>
    )}
  </div>
);

const BuildingLevels = ({ townHallLevel }: { townHallLevel: number }) => {
  const buildings = allBuildings
    .filter(({ name, amount_per_town_hall }) => {
      const buildingLevel = amount_per_town_hall.find((level) => level.level === townHallLevel);
      return (
        buildingLevel?.amount &&
        ![
          'Inferno Artillery',
          'Giga Tesla',
          'Barracks',
          'Dark Barracks',
          'Spell Factory',
          'Dark Spell Factory',
          'Workshop',
          'Pet House',
          'Wall',
        ].includes(name)
      );
    })
    .map((building) => ({
      ...building,
      numberAvailable: building.amount_per_town_hall.find((level) => level.level === townHallLevel)?.amount || 0,
      levels: building.levels.filter((level) => level.town_hall <= townHallLevel),
    }));

  return (
    <div className="grid flex-1 divide-x divide-y divide-primary grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll scrollbar-slim border border-primary rounded-2.5xl bg-background">
      {buildings.map((building, index) => (
        <div key={index} className="flex flex-col bg-primary-dark">
          <div className="p-3">{building.name}</div>
          {Array.from({ length: building.numberAvailable }, (_, i) => (
            <button
              key={i}
              className="flex items-center justify-between px-3 py-2 transition-colors group hover:bg-primary-light"
            >
              <div className="text-sm">
                <span className="text-primary-dark">Level</span> 0 / {building.levels.length}
              </div>
              <div className="grid p-2 transition-colors border rounded-full place-items-center bg-primary border-primary group-hover:bg-primary-light">
                <span className="icon-[solar--pen-linear]" />
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

const HeaderBanner = ({ isSettingLevels }: { isSettingLevels: boolean }) => (
  <div className="px-3 pb-3">
    <h1 className="px-3 py-2 text-xl text-center text-primary">
      {isSettingLevels ? 'Set building levels' : 'Add account'}
    </h1>
    <p className="px-3 pb-3 text-center text-primary-dark">
      {isSettingLevels
        ? 'Select the building levels of the account you want to add.'
        : 'Please enter the tag and API token of the account you want to add.'}
    </p>
  </div>
);

const AccountForm = ({
  onSubmit,
  register,
  errors,
  isLoading,
  player,
  clearPlayer,
}: {
  onSubmit: () => void;
  register: UseFormRegister<AddFormValues>;
  errors: FieldErrors<AddFormValues>;
  isLoading: boolean;
  player: FormattedPlayer | null;
  clearPlayer: () => void;
}) => (
  <div className="flex flex-col flex-1 w-full gap-3 mx-auto max-w-96">
    {!player ? (
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input registration={register('tag')} error={errors.tag} type="text" placeholder="Player Tag" />
        <Input registration={register('token')} error={errors.token} type="text" placeholder="Token" />
        <button
          disabled={!!player || isLoading}
          className="py-2 border rounded-2.5xl bg-background border-primary grid place-content-center enabled:hover:bg-primary disabled:opacity-50"
        >
          {isLoading ? <span className="icon-[svg-spinners--3-dots-scale]" /> : 'Verify account'}
        </button>
      </form>
    ) : (
      <PlayerCard player={player} clearPlayer={clearPlayer} />
    )}
  </div>
);

const PlayerCard = ({ player, clearPlayer }: { player: FormattedPlayer; clearPlayer: () => void }) => (
  <div className="flex flex-col gap-2 border rounded-2.5xl bg-background border-primary">
    <div className="flex items-center gap-3 p-3 border-b border-primary rounded-b-2.5xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={player.league.iconUrls.small} alt={player.league.name} className="h-10 aspect-square" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span>{player.name}</span>
          <div className="text-sm text-primary-darker">TH {player.townHallLevel}</div>
        </div>
        <span className="text-sm text-primary-dark">{player.tag}</span>
      </div>
      <div className="flex justify-end flex-1">
        <button
          onClick={clearPlayer}
          className="grid p-3 border rounded-full place-items-center bg-primary border-primary max-sm:text-xl"
        >
          <span className="icon-[solar--trash-bin-minimalistic-outline] max-sm:text-xl" />
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-3 px-3 pb-3">
      <LevelLoading interval={150} label="Heroes" amount={player.heroes.length} />
      <LevelLoading interval={300} label="Equipment" amount={player.heroEquipment.length} />
      <LevelLoading interval={400} label="Troops" amount={player.troops.length} />
      <LevelLoading interval={550} label="Spells" amount={player.spells.length} />
    </div>
  </div>
);

const LevelLoading = ({ interval, label, amount }: { interval: number; label: string; amount: number }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), interval);
    return () => clearTimeout(timer);
  }, [interval]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {isLoading ? (
          <span className="icon-[svg-spinners--90-ring-with-bg]" />
        ) : (
          <span className="icon-[solar--check-circle-bold]" />
        )}
        <span>{label}</span>
      </div>
      {!isLoading && <div className="text-sm text-primary-dark">{amount}</div>}
    </div>
  );
};
