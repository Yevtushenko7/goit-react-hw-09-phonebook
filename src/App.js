import React from "react";
import { useDispatch  } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));


export default function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);
  

  return (

      <>
        <AppBar />
        <Suspense fallback = {<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView} />
            <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
            <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
}

// class App extends Component {

//    componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
    
//     return (
    
//       <>
//         <AppBar />
//         <Suspense fallback = {<p>Loading...</p>}>
//           <Switch>
//             <PublicRoute exact path="/" component={HomeView} />
//             <PublicRoute path="/register" restricted redirectTo="/contacts" component={RegisterView} />
//             <PublicRoute path="/login" restricted redirectTo="/contacts" component={LoginView} />
//             <PrivateRoute path="/contacts" redirectTo="/login" component={ContactsView} />
//             <Redirect to="/" />
//           </Switch>
//         </Suspense>
//       </>
//     );
//   };
// };


// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);