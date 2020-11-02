import React from 'react';
import classes from './css/Navbar.module.scss';

import imgArrow from '../../assets/images/back-arrow.png';
import imgSwitch from '../../assets/images/switch.png';

const Navbar: React.FC = () => {
  return (
    <div className={classes.nav}>
      <button className={classes.button}>
        <img src={imgArrow} alt='back-arrow' />
      </button>
      <h2>Stations</h2>
      <button>
        <img src={imgSwitch} alt='switch-button' className={classes.switchImg} />
      </button>
    </div>
  );
};

export default Navbar;
