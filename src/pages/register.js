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
        <div className="form-group row">
          <div className="mx-auto mt-5">
            <div className="col-md-12 mx-auto mb-4">
              <h1>Cadastro de Produtos</h1>
            </div>

            <div className="container mt-2">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nome" />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Quantidade" />
                  </div>

                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Preço" />
                  </div>
                </div>

                <div className="float-right">
                  <button type="button" className="btn btn-dark">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
