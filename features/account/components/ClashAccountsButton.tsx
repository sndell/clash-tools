'use client';

import { Modal } from '@/components/ui/Modal';
import { getTownHallImage } from '@/features/buildings';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { changeActiveClashAccount } from '../actions/changeActiveClashAccount';

type Props = {
  accounts: {
    name: string;
    tag: string;
    townHallLevel: number;
  }[];
};

export const ClashAccountsButton = ({ accounts }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <button
        onClick={toggleModal}
        className="grid p-3 transition-colors border rounded-full place-content-center bg-primary border-primary hover:bg-primary-light"
      >
        <span className="icon-[solar--repeat-linear] max-sm:text-xl" />
      </button>
      <AnimatePresence>{isModalOpen && <ClashAccountsModal toggleModal={toggleModal} accounts={accounts} />}</AnimatePresence>
    </>
  );
};

const ClashAccountsModal = ({ toggleModal, accounts }: { toggleModal: () => void; accounts: Props['accounts'] }) => {
  const handleChangeActiveAccount = async (tag: string) => {
    toggleModal();
    await changeActiveClashAccount(tag);
  };

  return (
    <Modal
      close={toggleModal}
      className="border bg-primary border-primary rounded-2.5xl flex flex-col divide-y divide-primary w-full sm:max-w-96 overflow-y-auto scrollbar-slim"
    >
      {accounts.map((account) => (
        <button
          onClick={() => handleChangeActiveAccount(account.tag)}
          key={account.tag}
          className="flex items-center gap-3 p-3 transition-colors hover:bg-primary-light"
        >
          <Image
            src={getTownHallImage(account.townHallLevel)}
            alt="TH"
            height={40}
            width={40}
            className="object-contain aspect-square"
          />
          <div className="flex flex-col items-start">
            {account.name}
            <div className="text-sm text-primary-dark">{account.tag}</div>
          </div>
        </button>
      ))}
      <Link
        href="/add"
        onClick={toggleModal}
        className="flex items-center justify-center gap-2 py-3 transition-colors text-primary-dark hover:bg-primary-light"
      >
        <span className="icon-[clarity--add-line]" />
        Add new account
      </Link>
    </Modal>
  );
};
