import React, {FC} from 'react';
import {Link} from "react-router-dom";

import classes from './Header.module.css'

const Header:FC = () => {
  return (
    <div className={classes.header}>
      <Link to={'/'}>Back to episodes</Link>
    </div>
  );
};

export default Header;