import React from 'react';
import { RadioProps } from '../../types/radioProps';
import classes from './css/Stations.module.scss';

import imgMinus from '../../assets/images/minus.png';
import imgPlus from '../../assets/images/plus.png';
import imgClip from '../../assets/images/Clip.png';

const Stations: React.FC<RadioProps> = (props: RadioProps): React.ReactElement => {
  const {
    stationList,
    stationDetails,
    clickedStationId,
    toggleStationDetails,
    getStationId,
  } = props;

  const getId = (id: number) => {
    // check if getStationId prop is defined before calling it, because I made it optional
    if (getStationId) getStationId(id);
  };

  const toggleDetails = () => {
    // check if toggleStationDetails prop is defined before calling it, because I made it optional
    if (toggleStationDetails) toggleStationDetails();
  };

  let overflowScroll: any = {
    overflowY: '',
  };

  // activate scroll if there are more than 5 stations or if stationInfoDetails div is shown
  if (stationList.length > 5 || stationDetails) {
    overflowScroll = { overflowY: 'scroll' };
  }

  return (
    <div className={classes.wrapperStations} style={overflowScroll}>
      {stationList.map(station => (
        <div key={station.id}>
          {station.id === clickedStationId ? (
            <div className='collapse' id='showStation'>
              <div className={classes.stationInfoDetails} data-testid='stationDetailsDiv'>
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
              // get clicked station ID
              getId(station.id);
              // set stationDetails to true and show stationInfoDetails div
              if (!stationDetails || station.id === clickedStationId) toggleDetails();
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
