import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { AuthButton } from "@/features/auth";
import { SettingsButton } from "@/features/settings";
import { VillageSelectButton } from "@/features/village";

export const Header = () => {
  return (
    <header className="grid max-sm:grid-cols-[1fr_auto] grid-cols-[1fr_auto_1fr] py-3 relative items-center px-3">
      <Logo className="max-sm:hidden" />
      <NavBar />
      <div className="flex gap-2 place-self-end">
        <VillageSelectButton />
        <SettingsButton />
        <AuthButton />
      </div>
    </header>
  );
};
