import { stationListType } from './stationList';

export type RadioProps = {
  stationList: stationListType[];
  stationDetails: boolean;
  clickedStationId: number;
  toggleStationDetails?: () => void;
  getStationId?: (id: number) => void;
};
