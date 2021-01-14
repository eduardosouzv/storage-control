import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      price: '',
    };
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeQuantidade = (e) => {
    this.setState({ quantity: e.target.value });
  };

  changePreco = (e) => {
    this.setState({ price: e.target.value });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="mx-auto mt-5">
            <div className="row">
              <div className="col-md-12 mb-4">
                <h1>Produtos</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-2">
                <form>
                  <div className="form-group">
                    <label for="name">Nome</label>
                    <input id="name" type="text" className="form-control" />
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="quantity">Quantidade</label>
                      <input id="quantity" type="text" className="form-control" />
                    </div>

                    <div className="form-group col-md-6">
                      <label for="price">Preço</label>
                      <input id="price" type="text" className="form-control" />
                    </div>
                  </div>

                  <div>
                    <button type="button" className="btn btn-dark">
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Preço</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Celular</td>
                      <td>3</td>
                      <td>R$ 3200,00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Celular</td>
                      <td>3</td>
                      <td>R$ 3200,00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Celular</td>
                      <td>3</td>
                      <td>R$ 3200,00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Celular</td>
                      <td>3</td>
                      <td>R$ 3200,00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Celular</td>
                      <td>3</td>
                      <td>R$ 3200,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
