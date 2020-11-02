import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Stations from './components/stations/Stations';
import TabBar from './components/tabbar/TabBar';
import { fetchStations } from './API/stationsAPI';
import { stationListType } from './types/stationList';
import './App.scss';
import { act } from 'react-dom/test-utils';

const App = () => {
  const [stationList, setStationList] = useState<stationListType[]>([
    { id: 1, name: 'Putin FM', frq: '66,6' },
    { id: 2, name: 'Dribbble FM', frq: '101,2' },
    { id: 3, name: 'Doge FM', frq: '99,4' },
    { id: 4, name: 'Ballads FM', frq: '87,1' },
    { id: 5, name: 'Maximum FM', frq: '142,2' },
  ]);

  const [stationDetails, setStationDetails] = useState(false);
  const [clickedStationId, setClickedStationId] = useState(0);

  // !!! please uncomment lines 22-52 in order to fetch stations from stationsAPI
  // useEffect(() => {
  //   let isSubscribed = true;

  //   fetchStations()
  //     .then((newStations: stationListType[]) => {
  //       const fetchedList: stationListType[] = [];
  //       // don't add stations to stationList if there is a station with the same id + remove duplicates from fetched stations
  //       newStations.filter(item => {
  //         // returns -1 for unique element, otherwise if idx.id == item.id it returns the index of existing element with the same id
  //         const a = stationList.findIndex(idx => idx.id == item.id);
  //         const b = fetchedList.findIndex(idx => idx.id == item.id);
  //         // if the station is unique (findIndex returns -1), add station to fetchedList
  //         if (a <= -1 && b <= -1) {
  //           fetchedList.push({ id: item.id, name: item.name, frq: item.frq });
  //         }
  //         return null;
  //       });
  //       // we should wrap any code rendering and triggering updates to the components into act() calls
  //       act(() => {
  //         if (isSubscribed) setStationList(stationList.concat(fetchedList));
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });

  //   // cancel promise to prevent memory leaks
  //   return () => {
  //     isSubscribed = false;
  //   };
  // }, []);

  const toggleStationDetails = () => {
    setStationDetails(!stationDetails);
  };

  const getStationId = id => {
    setClickedStationId(id);
  };

  return (
    <div className='container'>
      <div className='wrapper-main'>
        <div className='wrapper-radio'>
          <Navbar />
          <Stations
            stationList={stationList}
            stationDetails={stationDetails}
            clickedStationId={clickedStationId}
            toggleStationDetails={toggleStationDetails}
            getStationId={getStationId}
          />
          <TabBar
            stationList={stationList}
            stationDetails={stationDetails}
            clickedStationId={clickedStationId}
          />
        </div>
      </div>
    </div>
  );
};

export default App;