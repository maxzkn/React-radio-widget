import React from 'react';
import { RadioProps } from '../../types/radioProps';
import classes from './css/TabBar.module.scss';

const TabBar: React.FC<RadioProps> = (props: RadioProps): React.ReactElement => {
  const { stationList, stationDetails, clickedStationId } = props;

  return (
    // show currently playing station if stationDetails is true
    <div className={classes.tabbar}>
      {stationDetails ? (
        <div className={classes.current} data-testid='currentDiv'>
          <p>Currently playing</p>
          {stationList
            .filter(station => station.id === clickedStationId)
            .map(station => (
              <h2 key={station.id}>{station.name}</h2>
            ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TabBar;
