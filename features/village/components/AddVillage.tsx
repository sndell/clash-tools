"use client";

import { useEffect, useState } from "react";
import { VillageDataForm } from "./VillageDataForm";
import { cn } from "@/util/cn";
import { createVillage } from "../actions/createVillage";
// import { UpdateBuildingsForm } from "@/features/tracker";

enum Stage {
  Account = "account",
  Building = "building",
  Wall = "wall",
}

const STAGE_CONFIG = {
  [Stage.Account]: {
    title: "Add a new village",
    description: "Import the data from your village",
    button: "Add village",
  },
  [Stage.Building]: {
    title: "Set building levels",
    description: "Set the levels for your buildings",
    button: "Set wall levels",
  },
  [Stage.Wall]: {
    title: "Set wall levels",
    description: "Enter your village's wall levels",
    button: "Add village",
  },
};

export const AddVillage = () => {
  const [stage, setStage] = useState<Stage>(Stage.Account);
  const [accountData, setAccountData] = useState<FormattedPlayer>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const canContinue = stage === Stage.Account ? !!accountData : true;
  const canGoBack = stage !== Stage.Account;

  const handleContinue = () => {
    if (stage === Stage.Account && accountData) {
      handleCreateVillage();
    } else if (stage === Stage.Building) {
      setStage(Stage.Wall);
    }
  };

  const handleBack = () => {
    if (stage === Stage.Building) {
      setStage(Stage.Account);
    } else if (stage === Stage.Wall) {
      setStage(Stage.Building);
    }
  };

  const handleCreateVillage = async () => {
    setErrorMessage(undefined);
    if (accountData) {
      const { error } = await createVillage(accountData);
      if (error) setErrorMessage(error);
    }
  };

  useEffect(() => {
    if (accountData) console.log(accountData);
  }, [accountData]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-3 overflow-y-auto flex-1 p-3 border-t xs:border xs:rounded-xl xs:mx-3 xs:mb-3 bg-primary border-primary">
      <StageHeader stage={stage} />
      <StageContent stage={stage} accountData={accountData} setAccountData={setAccountData} />
      <NavigationFooter
        stage={stage}
        canContinue={canContinue}
        canGoBack={canGoBack}
        onContinue={handleContinue}
        errorMessage={errorMessage}
        onBack={handleBack}
      />
    </div>
  );
};

const StageHeader = ({ stage }: { stage: Stage }) => {
  const config = STAGE_CONFIG[stage];

  return (
    <div className="py-3 mx-auto max-w-md text-center">
      <h1 className="text-2xl font-bold">{config.title}</h1>
      <p className="text-primary-dark">{config.description}</p>
    </div>
  );
};

const StageContent = ({
  stage,
  accountData,
  setAccountData,
}: {
  stage: Stage;
  accountData: FormattedPlayer | undefined;
  setAccountData: (data: FormattedPlayer | undefined) => void;
}) => {
  if (stage === Stage.Account) {
    return (
      <div className="mx-auto w-full max-w-md">
        <VillageDataForm setAccountData={setAccountData} accountData={accountData} />
      </div>
    );
  }

  // Placeholder for building and wall stages
  return <div className="flex items-center justify-center flex-1">Stage content coming soon...</div>;
};

const NavigationFooter = ({
  stage,
  canContinue,
  canGoBack,
  onContinue,
  errorMessage,
  onBack,
}: {
  stage: Stage;
  canContinue: boolean;
  canGoBack: boolean;
  onContinue: () => void;
  errorMessage?: string;
  onBack: () => void;
}) => (
  <div className="grid items-end">
    {errorMessage && <p className="text-sm text-center text-error pb-3">{errorMessage}</p>}
    <div className="grid grid-cols-[auto_1fr] gap-2 w-full mx-auto max-w-md">
      <BackButton onClick={onBack} isEnabled={canGoBack} />
      <ContinueButton stage={stage} isEnabled={canContinue} onClick={onContinue} />
    </div>
  </div>
);

const BackButton = ({ onClick, isEnabled }: { onClick: () => void; isEnabled: boolean }) => (
  <button
    onClick={onClick}
    className={cn(
      isEnabled
        ? "grid place-items-center rounded-xl border cursor-pointer outline-none aspect-square bg-secondary border-secondary hover:bg-secondary-light"
        : "overflow-hidden w-0"
    )}
  >
    <span className="icon-[solar--arrow-left-linear]" />
  </button>
);

const ContinueButton = ({ stage, isEnabled, onClick }: { stage: Stage; isEnabled: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    disabled={!isEnabled}
    className={cn(
      "py-3 rounded-xl border bg-accent border-accent cursor-pointer",
      !isEnabled && "opacity-50 cursor-not-allowed"
    )}
  >
    {STAGE_CONFIG[stage].button}
  </button>
);
