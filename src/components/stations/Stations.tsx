import React from 'react';
import { RadioProps } from '../../types/radioProps';
import classes from './css/Stations.module.scss';

import imgMinus from '../../assets/images/minus.png';
import imgPlus from '../../assets/images/plus.png';
import imgClip from '../../assets/images/Clip.png';

const Stations = (props: RadioProps): React.ReactElement => {
  const {
    stationList,
    isStationDetailsShown,
    selectedStation,
    toggleisStationDetailsShown,
    setStation,
  } = props;

  const setSelectedStation = (id: number) => {
    // check if getStationId prop is defined before calling it, because I made it optional
    if (setStation) setStation(id);
  };

  const toggleDetails = () => {
    // check if toggleisStationDetailsShown prop is defined before calling it, because I made it optional
    if (toggleisStationDetailsShown) toggleisStationDetailsShown();
  };

  return (
    <div className={classes.wrapperStations}>
      {stationList?.map(station => (
        <div key={station.id}>
          {selectedStation && station.id === selectedStation.id ? (
            <div className='collapse' id='showStation'>
              <div className={classes.stationInfoDetails} data-testid='isStationDetailsShownDiv'>
                <button>
                  <img src={imgMinus} alt='img-minus' />
                </button>
                <button>
                  <img src={imgClip} alt='song-cover' className={classes.clipImg} />
                </button>
                <button>
                  <img src={imgPlus} alt='img-plus' />
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div
            className={classes.stationInfo}
            onClick={() => {
              setSelectedStation(station.id);
              if (!isStationDetailsShown || (selectedStation && station.id === selectedStation.id))
                toggleDetails();
            }}
            data-testid='stationListDiv'
            data-toggle='collapse'
            data-target='#showStation'
          >
            <h2>{station.name}</h2>
            <h2 className={classes.frq}>{station.frq}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stations;
