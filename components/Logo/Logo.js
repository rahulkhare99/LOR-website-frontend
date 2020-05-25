import React from 'react';

import letterLogo from '../../assets/images/letter.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={letterLogo} alt="MyLOR" />
    </div>
);

export default logo;