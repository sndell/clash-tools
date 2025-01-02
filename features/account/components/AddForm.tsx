'use client';

import { useState } from 'react';
import { verifyAccount } from '../actions';
export const AddForm = () => {
  const [tag, setTag] = useState('');
  const [token, setToken] = useState('');

  const handleVerify = async () => {
    const result = await verifyAccount(tag, token);
    console.log(result);
  };

  return (
    <div className="flex flex-col flex-1 w-full gap-3 px-3 pb-3 mx-auto max-w-7xl">
      <div className="flex flex-col flex-1 p-3 border rounded-3xl bg-primary border-primary">
        <h1 className="px-3 py-2 text-xl text-center text-primary">Add a new Clash of Clans account</h1>
        <p className="px-3 pb-3 text-center text-primary-dark">
          Please enter the tag and API token of the account you want to add.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Player Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full p-2 px-3 mx-auto border rounded-full outline-none appearance-none max-w-96 placeholder:text-primary-darker bg-background border-primary"
          />
          <input
            type="text"
            placeholder="Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 px-3 mx-auto border rounded-full outline-none appearance-none max-w-96 placeholder:text-primary-darker bg-background border-primary"
          />
          <button
            onClick={handleVerify}
            className="w-full p-2 px-3 mx-auto transition-colors border rounded-full outline-none appearance-none hover:bg-primary-light max-w-96 placeholder:text-primary-darker bg-background border-primary"
          >
            Verify account
          </button>
        </div>
      </div>
    </div>
  );
};
