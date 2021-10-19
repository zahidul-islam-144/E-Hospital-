import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Home/Services/Services';
import Specialities from './components/Specialities/Specialities';
import Login from './components/Login/Login';
import Logout from './components/Logout/logout';
import NotFound from './components/NotFound/NotFound';
import Appointment from './components/Appointment/Appointment';
import AppointmentForm from './components/Appointment/AppointmentForm/AppointmentForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import ServiceDetails from './components/Home/Services/ServiceDetails/ServiceDetails';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">

        <AuthProvider>
          <Router>
            <Header></Header>

            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route  path="/home">
                <Home></Home>
              </Route>

              <PrivateRoute  path="/appointment">
                <AppointmentForm></AppointmentForm>
              </PrivateRoute>

              <PrivateRoute path="/appointment-form">
                <AppointmentForm></AppointmentForm>
              </PrivateRoute>

              <Route path="/services">
                <Services></Services>
              </Route>

              {/* dynamic route */}
              <Route path="/services/:serviceId">
                <ServiceDetails></ServiceDetails>
              </Route>

              <Route path="/specialities">
                <Specialities></Specialities>
              </Route>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/logout">
                {/* <Logout></Logout> */}
                <Home></Home>
              </Route>

              <Route  path="/register">
                <Register></Register>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>

            <Footer></Footer>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
