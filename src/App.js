import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={UserForm}></Route>
          <Route exact path='/user-list' component={UserList}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
