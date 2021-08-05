import React from 'react';
import { useSelector } from "react-redux";
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import Navigation from '../Navigation';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );

};


// const AppBar = ({ isAuthenticated }) => (
//     <header  className={styles.header}>
//         <Navigation />
//         {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });



// export default connect(mapStateToProps)(AppBar);