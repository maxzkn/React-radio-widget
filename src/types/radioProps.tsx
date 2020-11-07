import { stationListType } from './stationList';

export type RadioProps = {
  stationList?: stationListType[];
  isStationDetailsShown: boolean;
  selectedStationId?: number | null;
  selectedStation: stationListType | null;
  toggleisStationDetailsShown?: () => void;
  setStation?: (id: number) => void;
};
