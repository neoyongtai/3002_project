import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/DashBoard';
import Individual from './components/Individual';
import Notification from './components/Notifications';
import PlantCreationForm from './components/PlantCreationForm';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPlants } from './actions/plants';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlants());
  }, [dispatch]);

  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/individual" component={Individual} />
      <Route path='/notifications' component={Notification} />
      <Route path='/create' component={PlantCreationForm} />
    </Router>
  );
}

export default App;
