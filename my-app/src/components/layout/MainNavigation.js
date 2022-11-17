import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Project 3</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
          <Link to="/aboutus">About Us</Link>
          </li>
          <li>
          <Link to="/destinations">Destinations</Link>
          </li>
          <li>
          <Link to="/communityboards">Community Boards</Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

export default MainNavigation;
