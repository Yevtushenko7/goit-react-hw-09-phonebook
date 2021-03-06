import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ children, isAuthenticated,
  redirectTo,
  ...routeProps }) {
  
  const isLog = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLog ? children : <Redirect to={redirectTo} />}
    </Route>
  )
};

// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);