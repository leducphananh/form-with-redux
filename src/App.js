import CustomRoutes from 'components/CustomRoutes';
import Navbar from 'components/Navbar';
import { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import routes from 'routes/route';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loader"></div>}>
        <div className="main">
          <Navbar navItems={routes} />

          <Switch>
            <Redirect exact from="/" to={routes[0].path} />
            <CustomRoutes routes={routes} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
