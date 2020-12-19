import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Edit from './Components/Home/EditTodo/Edit';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/updateTodo/:id">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
