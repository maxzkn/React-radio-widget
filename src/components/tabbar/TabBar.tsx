import React from 'react';
import { RadioProps } from '../../types/radioProps';
import classes from './css/TabBar.module.scss';

const TabBar = (props: RadioProps): React.ReactElement => {
  const { isStationDetailsShown, selectedStation } = props;

  return (
    <div className={classes.tabbar}>
      {isStationDetailsShown && selectedStation ? (
        <div className={classes.current} data-testid='currentDiv'>
          <p>Currently playing</p>
          <h2 key={selectedStation.id}>{selectedStation.name}</h2>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TabBar;
