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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Header></Header>
     
      <Footer></Footer> */}
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/specialities">
              <Specialities></Specialities>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="logout">
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
