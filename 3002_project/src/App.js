import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
