'use client';

import { useCallback, useEffect, useState } from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { Input } from '@/components/form/Input';
import { allBuildings } from '@/data/structures';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';
import { AddFormSchema, AddFormValues } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifyAccount } from '../actions';
import { cn } from '@/utils/cn';

export const AddAccount = () => {
  const [isSettingLevels, setIsSettingLevels] = useState(false);
  const toggleIsSettingLevels = () => setIsSettingLevels(!isSettingLevels);

  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<FormattedPlayer | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<AddFormValues>({
    resolver: zodResolver(AddFormSchema),
    defaultValues: {
      tag: '',
      // token: '',
    },
  });

  const verifyPlayer = async (data: AddFormValues) => {
    setIsLoading(true);
    try {
      const result = await verifyAccount(data.tag);

      if (result.error || !result.data) {
        const errorMessage = 'Invalid API Token or Tag';
        // setError('token', { message: errorMessage });
        setError('tag', { message: errorMessage });
        return null;
      }

      setPlayer(result.data);
      return result.data;
    } catch (error) {
      console.error('Error verifying account:', error);
      // setError('token', { message: 'Verification failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const clearPlayer = useCallback(() => {
    setPlayer(null);
    reset();
  }, [reset]);

  return (
    <div className="flex flex-col flex-1 w-full gap-3 px-3 pb-3 mx-auto overflow-hidden max-w-7xl">
      <div className="flex flex-col flex-1 p-3 border rounded-2.5xl bg-primary border-primary overflow-hidden">
        <HeaderBanner isSettingLevels={isSettingLevels} />
        {isSettingLevels && player ? (
          <BuildingList townHallLevel={player.townHallLevel} />
        ) : (
          <AccountForm
            onSubmit={handleSubmit(verifyPlayer)}
            register={register}
            errors={errors}
            isLoading={isLoading}
            player={player}
            clearPlayer={clearPlayer}
          />
        )}
        <FooterActions isSettingLevels={isSettingLevels} player={player} toggleSettingLevels={toggleIsSettingLevels} clearPlayer={clearPlayer} />
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
        <button onClick={clearPlayer} className="grid p-3 border rounded-full place-items-center bg-background hover:bg-primary-light border-primary">
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

const BuildingList = ({ townHallLevel }: { townHallLevel: number }) => {
  const [buildingLevels, setBuildingLevels] = useState<{ [buildingName: string]: number }>({});
  const handleLevelUpdate = (buildingId: string, level: number) => {
    setBuildingLevels((prev) => ({
      ...prev,
      [buildingId]: level,
    }));
  };

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
    <div className="grid flex-1 divide-x divide-y divide-primary grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll scrollbar-slim border border-primary rounded-2.5xl bg-background-dark">
      {buildings.map((building, index) => (
        <div key={index} className="flex flex-col bg-primary-dark">
          <div className="px-3 pt-3">{building.name}</div>
          {Array.from({ length: building.numberAvailable }, (_, i) => (
            <Building
              building={building}
              handleLevelUpdate={handleLevelUpdate}
              selectedBuilding={`${building.name}${i}`}
              buildingLevels={buildingLevels}
              key={i}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Building = ({
  building,
  handleLevelUpdate,
  selectedBuilding,
  buildingLevels,
}: {
  building: Building;
  handleLevelUpdate: (buildingName: string, level: number) => void;
  selectedBuilding: string;
  buildingLevels: { [buildingName: string]: number };
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div key={selectedBuilding} className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3 text-sm">
          <Image
            src={`/images${building.levels[buildingLevels[selectedBuilding] > 0 ? buildingLevels[selectedBuilding] - 1 : 0]?.image_name}`}
            alt="image"
            width={56}
            height={56}
            className="object-contain border aspect-square border-primary rounded-2.5xl p-1 bg-primary"
          />
          <div className="text-primary-dark">Level</div> {buildingLevels[selectedBuilding] || 0} / {building.levels.length}
        </div>
        <button
          onClick={toggleModal}
          className="grid p-3 transition-colors border rounded-full place-items-center bg-primary border-primary hover:bg-primary-light"
        >
          <span className="icon-[solar--pen-linear]" />
        </button>
      </div>
      {isModalOpen && (
        <Modal
          close={toggleModal}
          className="w-full max-h-full sm:max-w-60 flex flex-col items-center divide-y divide-primary overflow-y-auto scrollbar-slim  border rounded-2.5xl border-primary bg-primary"
        >
          <button
            onClick={() => {
              handleLevelUpdate(selectedBuilding, 0);
              toggleModal();
            }}
            key={0}
            className={cn(
              'flex items-center justify-center w-full gap-3 py-1 transition-colors hover:bg-primary-light',
              !buildingLevels[selectedBuilding] && 'bg-primary-light'
            )}
          >
            <Image
              src={`/images${building.levels[0].image_name}`}
              alt="image"
              width={32}
              height={32}
              className="object-contain aspect-square opacity-50"
            />
            <div>Level 0</div>
          </button>
          {building.levels.map((level) => (
            <button
              onClick={() => {
                handleLevelUpdate(selectedBuilding, level.level);
                toggleModal();
              }}
              key={level.level}
              className={cn(
                'flex items-center justify-center w-full gap-3 py-1 transition-colors hover:bg-primary-light',
                buildingLevels[selectedBuilding] === level.level && 'bg-primary-light'
              )}
            >
              <Image src={`/images${level.image_name}`} alt="image" width={32} height={32} className="object-contain aspect-square" />
              <div>Level {level.level}</div>
            </button>
          ))}
        </Modal>
      )}
    </>
  );
};

const HeaderBanner = ({ isSettingLevels }: { isSettingLevels: boolean }) => (
  <div className="px-3 pb-3">
    <h1 className="px-3 py-2 text-xl text-center text-primary">{isSettingLevels ? 'Set building levels' : 'Add account'}</h1>
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
        {/* <Input registration={register('token')} error={errors.token} type="text" placeholder="Token" /> */}
        <button
          disabled={!!player || isLoading}
          className="py-2 border rounded-2.5xl bg-background border-primary grid place-content-center enabled:hover:bg-primary disabled:opacity-50"
        >
          {isLoading ? <span className="icon-[svg-spinners--3-dots-scale] text-2xl" /> : 'Load account'}
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
      {player.league && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={player.league.iconUrls.small} alt={player.league.name} className="h-10 aspect-square" />
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span>{player.name}</span>
          <div className="text-sm text-primary-darker">TH {player.townHallLevel}</div>
        </div>
        <span className="text-sm text-primary-dark">{player.tag}</span>
      </div>
      <div className="flex justify-end flex-1">
        <button onClick={clearPlayer} className="grid p-3 border rounded-full place-items-center bg-primary border-primary max-sm:text-xl">
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
        {isLoading ? <span className="icon-[svg-spinners--90-ring-with-bg]" /> : <span className="icon-[solar--check-circle-bold]" />}
        <span>{label}</span>
      </div>
      {!isLoading && <div className="text-sm text-primary-dark">{amount}</div>}
    </div>
  );
};
