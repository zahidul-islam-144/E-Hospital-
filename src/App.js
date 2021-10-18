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


function App() {
  return (
    <div className="App">

        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/appointment">
              <AppointmentForm></AppointmentForm>
            </Route>

            <Route exact path="/appointment-form">
              <AppointmentForm></AppointmentForm>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>

            {/* dynamic route */}
            <Route exact path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>

            <Route exact path="/specialities">
              <Specialities></Specialities>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/logout">
              <Logout></Logout>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
