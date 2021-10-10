import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/DashBoard';
import Individual from './components/Individual';
import Notification from './components/Notifications';

import { Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/individual" component={Individual} />
      <Route path='/notifications' component={Notification} />
    </Router>
  );
}

export default App;
