import { useCallback, useState } from 'react';

export const useBuildingLevels = () => {
  const [buildingLevels, setBuildingLevels] = useState<BuildingLevel>({});

  const updateLevel = useCallback((buildingId: string, level: number) => {
    setBuildingLevels((prev) => ({ ...prev, [buildingId]: level }));
  }, []);

  return { buildingLevels, updateLevel };
};
