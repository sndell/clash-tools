"use client";

import { useState } from "react";
import { VillageDataForm } from "./VillageDataForm";
import { cn } from "@/util/cn";
import { UpdateBuildingsForm } from "@/features/tracker";

enum Stage {
  Account = "account",
  Building = "building",
  Wall = "wall",
}

const STAGE_CONTENT = {
  [Stage.Account]: {
    title: "Add a new village",
    description: (
      <>
        Enter the <strong>player tag</strong> of the village you want to add.
      </>
    ),
    button: "Set building levels",
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
} as const;

export const AddVillage = () => {
  const [stage, setStage] = useState<Stage>(Stage.Account);
  const [accountData, setAccountData] = useState<FormattedPlayer>();

  const handleNavigation = {
    continue: () => {
      if (stage === Stage.Account && accountData) setStage(Stage.Building);
      else if (stage === Stage.Building) setStage(Stage.Wall);
    },
    back: () => {
      if (stage === Stage.Building) setStage(Stage.Account);
      else if (stage === Stage.Wall) setStage(Stage.Building);
    },
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-3 overflow-y-auto flex-1 p-3 border-t xs:border xs:rounded-xl xs:mx-3 xs:mb-3 bg-primary border-primary">
      <StageHeader stage={stage} />

      {stage === Stage.Account && (
        <div className="mx-auto w-full max-w-md">
          <VillageDataForm setAccountData={setAccountData} accountData={accountData} />
        </div>
      )}

      {stage === Stage.Building && accountData && <UpdateBuildingsForm townHallLevel={accountData.townHallLevel} />}

      <div className="grid items-end">
        <div className="grid grid-cols-[auto_1fr] gap-2 w-full mx-auto max-w-md">
          <BackButton onClick={handleNavigation.back} isEnabled={stage !== Stage.Account} />
          <ContinueButton
            stage={stage}
            isEnabled={stage === Stage.Account ? !!accountData : true}
            onClick={handleNavigation.continue}
          />
        </div>
      </div>
    </div>
  );
};

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
    {STAGE_CONTENT[stage].button}
  </button>
);

const StageHeader = ({ stage }: { stage: Stage }) => {
  const content = STAGE_CONTENT[stage];

  return (
    <div className="py-3 mx-auto max-w-md text-center">
      <h1 className="text-2xl font-bold">{content.title}</h1>
      <p className="text-primary-dark">{content.description}</p>
    </div>
  );
};
