import React from 'react';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <div className={classes.nav}>
        <div className={classes.searchContainer}>
            <input />
            <button className={classes.searchBtn}>Search</button>
        </div>
    </div>
  );
}

export default Navbar;
