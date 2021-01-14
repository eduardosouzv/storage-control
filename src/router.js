import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Register from './pages/products';
import CategoryRegister from './pages/category_register';

const Router = () => {
  return (
    <>

      <BrowserRouter>
        <nav>

          <ul className="nav flex-column bg-dark mb-0 navcss">

            <p className="text-white font-weight-bold mx-auto py-3 pb-4 mb-0">DASHBOARD</p>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/category_register">
                Registrar Categoria
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Registrar Produtos
              </Link>
            </li>

          </ul>

        </nav>

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/category_register" component={CategoryRegister} />

        </Switch>

      </BrowserRouter>

    </>
  );
};

export default Router;
