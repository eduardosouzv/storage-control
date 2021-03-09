import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/home';
import Register from '../pages/products';
import CategoryRegister from '../pages/categoryRegister';

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="nav flex-column bg-dark mb-0 navcss">
            <p className="text-white font-weight-bold mx-auto py-3 pb-4 mb-0">
              Controle de Estoque
            </p>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <i className="fas fa-home mr-2" style={{ color: 'white' }}></i>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/category_register">
                <i className="fas fa-plus mr-2" style={{ color: 'white' }}></i>
                Registrar Categoria
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                <i className="fas fa-box mr-2" style={{ color: 'white' }}></i>
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
