import React from 'react';
import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {

  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
 
  return (
    <nav>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
        to='/'
        exact

      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}

        >
          Contacts
        </NavLink>
      )}
    </nav>
  );



}



// const Navigation = ({ isAuthenticated }) => (
//   <nav>
//     <NavLink
//       className={styles.navLink}
//       activeClassName={styles.navLinkActive}
//       to= '/'
//       exact
      
//     >
//       Home
//     </NavLink>

//     {isAuthenticated && (
//       <NavLink
//         to="/contacts"
//         exact
//         className={styles.navLink}
//         activeClassName={styles.navLinkActive}
       
//       >
//         Contacts
//       </NavLink>
//     )}
//   </nav>
// );


// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);