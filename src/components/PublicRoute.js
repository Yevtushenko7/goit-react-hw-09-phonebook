import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({ children, isAuthenticated, redirectTo, ...routeProps}) {
  const isLog = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLog && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>

  )


};



// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);