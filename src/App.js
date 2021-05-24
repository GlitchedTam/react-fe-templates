import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Counter from './routes/Counter';
import Navbar from './Navbar'; 
import './styles/App.css';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div id='content' style={{paddingTop:12}}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/counter'>
              <Counter />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
