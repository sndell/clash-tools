"use client";

import { useEffect, useState } from "react";
import { VillageDataForm } from "./VillageDataForm";
import { cn } from "@/util/cn";
import { createVillage } from "../actions/createVillage";

export const AddVillage = () => {
  const [accountData, setAccountData] = useState<FormattedPlayer>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const canContinue = !!accountData;

  const handleContinue = async () => {
    setErrorMessage(undefined);
    if (accountData) {
      console.log(accountData.buildings);

      const { error } = await createVillage(accountData);
      if (error) setErrorMessage(error);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-3 overflow-y-auto flex-1 p-3 border-t xs:border xs:rounded-xl xs:mx-3 xs:mb-3 bg-primary border-primary">
      <div className="py-3 mx-auto max-w-md text-center">
        <h1 className="text-2xl font-bold">Add a new village</h1>
        <p className="text-primary-dark">Import the data from your village</p>
      </div>

      <div className="mx-auto w-full max-w-md">
        <VillageDataForm setAccountData={setAccountData} accountData={accountData} />
      </div>

      <div className="grid items-end">
        {errorMessage && <p className="pb-3 text-sm text-center text-error">{errorMessage}</p>}
        <div className="mx-auto w-full max-w-md">
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className={cn(
              "py-3 rounded-xl border bg-accent border-accent cursor-pointer w-full",
              !canContinue && "opacity-50 cursor-not-allowed"
            )}
          >
            Add village
          </button>
        </div>
      </div>
    </div>
  );
};
