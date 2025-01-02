'use client';

import { useEffect, useState } from 'react';
import { verifyAccount } from '../actions';
import { useForm } from 'react-hook-form';
import { AddFormSchema, AddFormValues } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/form/Input';

export const AddForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<FormattedPlayer | null>();

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
      return;
    }

    setIsLoading(false);
    setPlayer(result.data);
  };

  const clearPlayer = () => {
    setPlayer(null);
    reset();
  };

  return (
    <div className="flex flex-col flex-1 w-full gap-3 px-3 pb-3 mx-auto max-w-7xl">
      <div className="flex flex-col flex-1 p-3 border rounded-3xl bg-primary border-primary">
        <TextBanner />
        <div className="flex flex-col w-full gap-3 mx-auto max-w-96">
          {!player && (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
              <Input registration={register('tag')} error={errors.tag} type="text" placeholder="Player Tag" />
              <Input registration={register('token')} error={errors.token} type="text" placeholder="Token" />
              <button
                disabled={!!player || isLoading}
                className="grid w-full p-2 px-3 mx-auto transition-colors border rounded-full outline-none appearance-none disabled:opacity-50 place-content-center enabled:hover:bg-primary-light max-w-96 placeholder:text-primary-darker bg-background border-primary"
              >
                {isLoading ? <span className="icon-[svg-spinners--3-dots-scale] text-2xl" /> : 'Verify account'}
              </button>
            </form>
          )}
          {player && <PlayerCard player={player} clearPlayer={clearPlayer} />}
        </div>
      </div>
    </div>
  );
};

const TextBanner = () => {
  return (
    <>
      <h1 className="px-3 py-2 text-xl text-center text-primary">Add a new Clash of Clans account</h1>
      <p className="px-3 pb-3 text-center text-primary-dark">
        Please enter the tag and API token of the account you want to add.
      </p>
    </>
  );
};

const LevelLoading = ({ interval, label, amount }: { interval: number; label: string; amount: number }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const wait = setTimeout(() => setIsLoading(false), interval);
    return () => clearTimeout(wait);
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

const PlayerCard = ({ player, clearPlayer }: { player: FormattedPlayer; clearPlayer: () => void }) => {
  return (
    <>
      <div className="flex flex-col gap-2 p-3 border rounded-3xl bg-background border-primary">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={player.league.iconUrls.small} alt={player.league.name} className="h-10 aspect-square" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>{player.name}</span>
              <div className="text-sm text-primary-darker">TH {player.townHallLevel}</div>
            </div>
            <span className="text-sm text-primary-dark">{player.tag}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <LevelLoading interval={150} label="Heroes" amount={player.heroes.length} />
          <LevelLoading interval={300} label="Equipment" amount={player.heroEquipment.length} />
          <LevelLoading interval={400} label="Troops" amount={player.troops.length} />
          <LevelLoading interval={550} label="Spells" amount={player.spells.length} />
        </div>
      </div>
      <button
        onClick={clearPlayer}
        className="flex items-center justify-center gap-2 py-2 transition-colors border rounded-full bg-background hover:bg-primary border-primary"
      >
        <span className="icon-[solar--arrow-left-linear]" />
        Add a different account
      </button>
    </>
  );
};
