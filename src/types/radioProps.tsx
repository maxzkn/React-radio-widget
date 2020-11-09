import { stationListType } from './stationList';

export type RadioProps = {
  stationList?: stationListType[];
  isStationDetailsShown: boolean;
  selectedStation: stationListType | null;
  toggleisStationDetailsShown?: () => void;
  setStation?: (id: number) => void;
};
