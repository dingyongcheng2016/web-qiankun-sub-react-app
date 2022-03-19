import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams }  from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import logo  from './logo.svg';


function App() {
  return (
    // @ts-ignore
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/sub-app-react' : '/'}>
      <div className='App'>
        <ul className='App-header'>
          <li>
            <Link to="/">Home</Link>|
          </li>
          <li>
            <Link to="/about">About</Link>|
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/topics">
          <Topics/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
