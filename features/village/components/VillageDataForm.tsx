"use client";

import { useEffect, useState } from "react";
import { getVillageData } from "../actions/getVillageData";
import Image from "next/image";

type VillageDataFormProps = {
  setAccountData: (data: FormattedPlayer | undefined) => void;
  accountData: FormattedPlayer | undefined;
};

export const VillageDataForm = ({ setAccountData, accountData }: VillageDataFormProps) =>
  accountData ? (
    <VillageDataDisplay accountData={accountData} onBack={() => setAccountData(undefined)} />
  ) : (
    <VillageDataInput setAccountData={setAccountData} />
  );

const VillageDataInput = ({ setAccountData }: Pick<VillageDataFormProps, "setAccountData">) => {
  const [tag, setTag] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!tag) return;

    setIsLoading(true);
    const { data, error } = await getVillageData({ tag });

    if (error) {
      setErrorMessage(error);
      setIsLoading(false);
      return;
    }

    setAccountData(data || undefined);
    setIsLoading(false);
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Enter player tag"
        className="px-3 py-2 w-full rounded-xl border outline-none bg-secondary placeholder:text-placeholder border-secondary"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button
        className="grid place-items-center py-2 w-full text-center rounded-xl border transition-colors cursor-pointer bg-secondary border-secondary hover:bg-secondary-light"
        onClick={handleSubmit}
      >
        {isLoading ? <span className="icon-[svg-spinners--3-dots-move] py-3" /> : "Load village"}
      </button>
      {errorMessage && <p className="text-sm text-center text-error">{errorMessage}</p>}
    </div>
  );
};

const VillageDataDisplay = ({ accountData, onBack }: { accountData: FormattedPlayer; onBack: () => void }) => (
  <div className="flex overflow-hidden flex-col items-center rounded-xl border divide-y bg-secondary border-secondary divide-secondary">
    <PlayerCard data={accountData} />
    <LoadingStats />
    <BackButton onClick={onBack} />
  </div>
);

const PlayerCard = ({ data }: { data: FormattedPlayer }) => (
  <div className="flex gap-2 items-center p-3 w-full">
    <Image
      src={`/images/town-hall/Town_Hall${data.townHallLevel}.webp`}
      alt={`Town Hall ${data.townHallLevel}`}
      width={56}
      height={56}
      className="object-contain h-14 aspect-square"
    />
    <div>
      <div className="flex gap-2 items-center">
        <h2 className="text-lg">{data.name}</h2>
        <p className="text-sm text-primary-darker">Town Hall {data.townHallLevel}</p>
      </div>
      <p className="text-sm text-primary-dark">{data.tag}</p>
    </div>
  </div>
);

const LoadingStats = () => (
  <div className="p-3 space-y-1 w-full">
    {[
      { label: "Heroes", interval: 200 },
      { label: "Equipment", interval: 350 },
      { label: "Troops", interval: 500 },
      { label: "Spells", interval: 650 },
    ].map((stat) => (
      <LoadingStat key={stat.label} {...stat} />
    ))}
  </div>
);

const LoadingStat = ({ interval, label }: { interval: number; label: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), interval);
    return () => clearTimeout(timer);
  }, [interval]);

  return (
    <div className="flex gap-3 items-center">
      {isLoading ? (
        <span className="icon-[svg-spinners--90-ring-with-bg]" />
      ) : (
        <span className="icon-[solar--check-circle-bold]" />
      )}
      <span>{label}</span>
    </div>
  );
};

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex gap-2 justify-center items-center py-3 w-full transition-colors cursor-pointer hover:bg-secondary-light"
  >
    <span className="icon-[solar--arrow-left-linear]" />
    <span className="text-sm">Choose a different village</span>
  </button>
);
