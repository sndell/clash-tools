'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddFormSchema, AddFormValues } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/form/Input';
import { EditBuildingLevels, EditWallLevels, getArmyBuildingsState, getTownHallState } from '@/features/buildings';
import { verifyAccount } from '../actions/verifyAccount';
import { createClashAccount } from '../actions/createClashAccount';
import { getTownHallImage } from '@/features/buildings/util/getTownHallImage';

const getHeaderTitle = (mode: 'building' | 'wall' | 'account') => {
  return mode === 'building' ? 'Set building levels' : mode === 'wall' ? 'Set wall levels' : 'Add Clash Account';
};

const getHeaderDescription = (mode: 'building' | 'wall' | 'account') => {
  return mode === 'building'
    ? 'Set the building levels of the account'
    : mode === 'wall'
    ? 'Set the wall levels of the account'
    : 'Enter the village tag of the account you want to add';
};

export const AddAccount = () => {
  const [mode, setMode] = useState<'building' | 'wall' | 'account'>('account');
  const [isFirstTimeLoading, setIsFirstTimeLoading] = useState(true);
  const [isWallsValid, setIsWallsValid] = useState(true);
  const [player, setPlayer] = useState<FormattedPlayer | null>(null);
  const [buildingLevels, setBuildingLevels] = useState<BuildingState[]>([]);
  const [wallLevels, setWallLevels] = useState<WallState[]>([]);

  const clearPlayer = () => {
    setPlayer(null);
    setBuildingLevels([]);
    setWallLevels([]);
  };

  const addAccount = async () => {
    if (!player || !buildingLevels.length || !wallLevels.length) return;
    const { spells, heroes, heroEquipment, troops } = player;
    const townHallState = getTownHallState(player.townHallLevel, player.townHallWeaponLevel);
    const armyBuildingsState = getArmyBuildingsState(troops, spells);
    const playerInfo = {
      tag: player.tag,
      name: player.name,
      townHallLevel: player.townHallLevel,
      townHallWeaponLevel: player.townHallWeaponLevel,
    };
    const result = await createClashAccount(
      playerInfo,
      buildingLevels,
      [...townHallState, ...armyBuildingsState],
      wallLevels,
      troops,
      spells,
      heroes,
      heroEquipment
    );
    if (result.error) console.log(result.error);
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-3 rounded-2.5xl flex-1 mb-3 overflow-y-hidden flex flex-col">
      <div className="bg-primary border border-primary rounded-2.5xl p-3 flex-1 flex flex-col  overflow-y-hidden">
        <HeaderText title={getHeaderTitle(mode)} description={getHeaderDescription(mode)} />
        {mode === 'building' && player ? (
          <EditBuildingLevels
            townHallLevel={player.townHallLevel}
            initialBuildingLevels={buildingLevels}
            setInitialBuildingLevels={setBuildingLevels}
          />
        ) : mode === 'wall' && player ? (
          <EditWallLevels
            townHallLevel={player.townHallLevel}
            onWallStatusChange={setIsWallsValid}
            initialWallLevels={wallLevels}
            setInitialWallLevels={setWallLevels}
          />
        ) : player ? (
          <AccountInfo
            player={player}
            clearPlayer={clearPlayer}
            isFirstTimeLoading={isFirstTimeLoading}
            setIsFirstTimeLoading={setIsFirstTimeLoading}
          />
        ) : (
          <AccountForm setPlayer={setPlayer} />
        )}
        <Footer
          isButtonDisabled={!player || (mode === 'wall' && !isWallsValid)}
          setMode={setMode}
          mode={mode}
          addAccount={addAccount}
        />
      </div>
    </div>
  );
};

const HeaderText = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="pt-3 pb-6 text-center">
      <div className="pb-1 text-xl">{title}</div>
      <p className="text-primary-dark">{description}</p>
    </div>
  );
};

const Footer = ({
  isButtonDisabled,
  setMode,
  mode,
  addAccount,
}: {
  isButtonDisabled: boolean;
  setMode: (value: 'building' | 'wall' | 'account') => void;
  mode: 'building' | 'wall' | 'account';
  addAccount: () => Promise<void>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleAddAccount = async () => {
    setIsLoading(true);
    await addAccount();
    setIsLoading(false);
  };

  return (
    <div className="flex items-end w-full gap-2 pt-3 mx-auto max-w-96">
      {mode === 'building' ? (
        <>
          <button
            onClick={() => setMode('account')}
            className="grid p-3 transition-colors border rounded-full place-content-center bg-background border-primary hover:bg-primary-light"
          >
            <span className="icon-[solar--arrow-left-linear] max-sm:text-xl" />
          </button>
          <button
            onClick={() => setMode('wall')}
            disabled={isButtonDisabled}
            className="px-4 py-2 flex-1 border rounded-full bg-accent border-accent grid place-content-center max-sm:py-2.5 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-accent-light transition-colors"
          >
            Set wall levels
          </button>
        </>
      ) : mode === 'wall' ? (
        <>
          <button
            onClick={() => setMode('building')}
            className="grid p-3 transition-colors border rounded-full place-content-center bg-background border-primary hover:bg-primary-light"
          >
            <span className="icon-[solar--arrow-left-linear] max-sm:text-xl" />
          </button>
          <button
            onClick={handleAddAccount}
            disabled={isButtonDisabled}
            className="px-4 py-2 flex-1 border rounded-full bg-accent border-accent grid place-content-center max-sm:py-2.5 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-accent-light transition-colors"
          >
            {isLoading ? <span className="icon-[svg-spinners--3-dots-scale] text-2xl" /> : 'Finish account setup'}
          </button>
        </>
      ) : (
        <button
          onClick={() => setMode('building')}
          disabled={isButtonDisabled}
          className="w-full px-4 py-2 border rounded-full bg-accent border-accent grid place-content-center max-sm:py-2.5 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-accent-light transition-colors"
        >
          Set building levels
        </button>
      )}
    </div>
  );
};

const AccountForm = ({ setPlayer }: { setPlayer: (player: FormattedPlayer) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AddFormValues>({ resolver: zodResolver(AddFormSchema) });

  const onSubmit = async (data: AddFormValues) => {
    setIsLoading(true);
    const result = await verifyAccount(data.tag);

    if (result.data) setPlayer(result.data);
    else if (result.error === 'Account already exists') setError('tag', { message: 'Account with tag already added' });
    else setError('tag', { message: 'Player not found' });

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 w-full mx-auto max-w-96">
      <Input registration={register('tag')} error={errors.tag} type="text" placeholder="Enter village tag" />
      <button className="w-full px-4 py-2 mt-3 border rounded-full border-primary grid place-content-center bg-background max-sm:py-2.5">
        {isLoading ? <span className="icon-[svg-spinners--3-dots-scale] text-2xl" /> : 'Login'}
      </button>
    </form>
  );
};

const AccountInfo = ({
  player,
  clearPlayer,
  isFirstTimeLoading,
  setIsFirstTimeLoading,
}: {
  player: FormattedPlayer;
  clearPlayer: () => void;
  isFirstTimeLoading: boolean;
  setIsFirstTimeLoading: (value: boolean) => void;
}) => {
  useEffect(() => {
    setTimeout(() => setIsFirstTimeLoading(false), 1000);
  }, []);

  const handleClearPlayer = () => {
    setIsFirstTimeLoading(true);
    clearPlayer();
  };

  return (
    <div className="flex-1">
      <div className="bg-background-dark rounded-2.5xl border border-primary max-w-96 mx-auto w-full ">
        <PlayerCard player={player} />
        <div className="flex flex-col gap-2 p-3 border-b border-primary">
          <LoadingStat interval={isFirstTimeLoading ? 130 : 0} label="Heroes" />
          <LoadingStat interval={isFirstTimeLoading ? 340 : 0} label="Equipment" />
          <LoadingStat interval={isFirstTimeLoading ? 430 : 0} label="Tropps" />
          <LoadingStat interval={isFirstTimeLoading ? 500 : 0} label="Spells" />
        </div>
        <button
          onClick={handleClearPlayer}
          className="flex items-center w-full justify-center gap-2 p-3 rounded-b-2.5xl hover:bg-background cursor-pointer transition-colors"
        >
          <span className="icon-[solar--arrow-left-linear]" />
          <span className="text-sm">Choose a different account</span>
        </button>
      </div>
    </div>
  );
};

const PlayerCard = ({ player }: { player: FormattedPlayer }) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-primary">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={getTownHallImage(player.townHallLevel)} alt="Town Hall" className="object-contain h-16 aspect-square" />
      <div>
        <div className="flex items-center gap-2">
          {player.name} <span className="text-sm text-primary-darker">Town Hall {player.townHallLevel}</span>
        </div>
        <div className="text-sm text-primary-dark">{player.tag}</div>
      </div>
    </div>
  );
};

const LoadingStat = ({ interval, label }: { interval: number; label: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), interval);
    return () => clearTimeout(timer);
  }, [interval]);

  return (
    <div className="flex items-center gap-3">
      {isLoading ? (
        <span className="icon-[svg-spinners--90-ring-with-bg]" />
      ) : (
        <span className="icon-[solar--check-circle-bold]" />
      )}
      <span>{label}</span>
    </div>
  );
};
