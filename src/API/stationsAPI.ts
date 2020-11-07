import { stationListType } from '../types/stationList';

export const fetchStations = async (): Promise<stationListType[]> => {
  const url = 'http://www.json-generator.com/api/json/get/coDAGwngFu?indent=2';
  const data = await (await fetch(url)).json();
  // console.log(data);
  return data;
};
