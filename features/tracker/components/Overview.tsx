import Image from "next/image";

export const Overview = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] overflow-hidden rounded-xl border divide-x bg-primary border-primary divide-primary">
      <div className="grid overflow-hidden place-items-center p-3 h-full aspect-square">
        <Image
          src="/images/th17.webp"
          alt="th17"
          width={56}
          height={56}
          className="object-contain h-full aspect-square"
        />
      </div>
      <div className="w-full">
        <div className="flex divide-x divide-primary">
          <div className="flex flex-1 gap-2 items-center px-3">
            <div>Phuni</div>
            <div className="text-sm text-primary-dark">#2LUCULPQ2</div>
          </div>
          <button className="grid place-content-center h-10 transition-colors cursor-pointer aspect-square hover:bg-primary-light">
            <span className="icon-[solar--refresh-bold]" />
          </button>
          <button className="grid place-content-center h-10 transition-colors cursor-pointer aspect-square hover:bg-primary-light">
            <span className="icon-[solar--pen-linear]" />
          </button>
        </div>
        <div className="bg-divider h-[1px] w-full" />
        <div className="flex h-10 divide-x divide-primary">
          <div className="flex relative flex-1 gap-2 justify-between items-center px-3 bg-secondary">
            <div className="absolute left-0 w-1/2 h-full bg-primary-light" />
            <div>Buildings</div>
            <div className="text-sm text-primary-dark">50%</div>
          </div>

          <button className="grid place-content-center h-10 transition-colors cursor-pointer aspect-square hover:bg-primary-light">
            <span className="icon-[solar--alt-arrow-down-linear]" />
          </button>
        </div>
      </div>
    </div>
  );
};
