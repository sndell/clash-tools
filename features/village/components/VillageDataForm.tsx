"use client";

import { useEffect, useState } from "react";
import { getVillageData } from "../actions/getVillageData";
import Image from "next/image";

export const VillageDataForm = ({
  setAccountData,
  accountData,
}: {
  setAccountData: (data: FormattedPlayer | undefined) => void;
  accountData: FormattedPlayer | undefined;
}) => {
  if (accountData) return <VillageDataDisplay accountData={accountData} onBack={() => setAccountData(undefined)} />;

  return <VillageDataInput setAccountData={setAccountData} />;
};

const VillageDataInput = ({ setAccountData }: { setAccountData: (data: FormattedPlayer | undefined) => void }) => {
  const [jsonData, setJsonData] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!jsonData) return;

    setIsLoading(true);
    const { data, error } = await getVillageData({ data: jsonData });

    if (error) {
      setErrorMessage(error);
      setIsLoading(false);
      return;
    }

    setAccountData(data || undefined);
    setIsLoading(false);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter your village data"
          className="px-3 py-2 w-full rounded-xl border outline-none bg-secondary placeholder:text-placeholder border-secondary"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        />
        <button
          className="grid place-items-center py-2 w-full text-center rounded-xl border transition-colors cursor-pointer bg-secondary border-secondary hover:bg-secondary-light"
          onClick={handleSubmit}
        >
          {isLoading ? <span className="icon-[svg-spinners--3-dots-move] py-3" /> : "Load village"}
        </button>
        {errorMessage && <p className="text-sm text-center text-error">{errorMessage}</p>}
      </div>
      {/* <div className="flex items-center gap-3">
        <div className="bg-divider w-full h-[1px]" />
        <span>or</span>
        <div className="bg-divider w-full h-[1px]" />
      </div>
      <button className="bg-accent py-2 px-3 w-full border border-accent rounded-xl">Import from clipboard</button> */}
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

const LoadingStats = () => {
  const stats = [
    { label: "Heroes", interval: 200 },
    { label: "Equipment", interval: 350 },
    { label: "Troops", interval: 500 },
    { label: "Spells", interval: 650 },
    { label: "Buildings", interval: 800 },
  ];

  return (
    <div className="p-3 space-y-1 w-full">
      {stats.map((stat) => (
        <LoadingStat key={stat.label} interval={stat.interval} label={stat.label} />
      ))}
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
