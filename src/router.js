import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <nav>
              <ul class="nav flex-column bg-dark mb-0 navcss">
                <p class="text-white font-weight-bold text-uppercase mx-auto py-3 small pb-4 mb-0">DASHBOARD</p>
                <li class="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                <li class="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
              </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
    </div>
  );
};

export default Router;
