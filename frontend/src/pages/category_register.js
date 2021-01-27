import React from 'react';
import axios from 'axios';

import Sucess from '../components/sucessMessage';
import Failed from '../components/failMessage';

class CategoryRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],

      category_name: '',
      sucess: {
        visibility: false,
        msg: '',
      },
      failed: {
        visibility: false,
        msg: '',
      },
    };
  }

  componentDidMount = () => {
    this.getCategories();
  };

  getCategories = async () => {
    const response = await axios.get('http://localhost:3001/category/categories');
    var el = [];
    response.data.map((product) =>
      el.push(
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.nome}</td>
          <td>
            <i
              className="fas fa-pen fa-2x"
              title="Editar"
              style={{ cursor: 'pointer', paddingRight: '18px' }}
              onClick={() => {
                console.log('edit');
              }}
            ></i>
            <i
              className="fas fa-trash-alt fa-2x"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                console.log('del');
              }}
            ></i>
          </td>
        </tr>
      )
    );
    this.setState({ categories: el });
  };

  changeCatName = (e) => {
    this.setState({ category_name: e.target.value });
  };

  sendCatName = () => {
    this.setState({ sucess: { visibility: false, msg: '' }, failed: { visibility: false, msg: '' } });

    if (this.state.category_name.length === 0) {
      this.setState({ failed: { visibility: true, msg: 'Campo em branco.' } });
    } else {
      axios
        .post('http://localhost:3001/category/create', { name: this.state.category_name })
        .then(this.setState({ sucess: { visibility: true, msg: 'Cadastrado.' } }));
    }
  };

  render() {
    return (
      <div>
        <div className="form-group row">
          <div className="mx-auto mt-5">
            <div className="col-md-12 mx-auto mb-4">
              <h1>Cadastro de Categoria</h1>
            </div>

            <div className="container">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nome da categoria" onChange={this.changeCatName} />
                </div>

                <div className="float-right">
                  <button type="button" className="btn btn-dark" onClick={this.sendCatName}>
                    Cadastrar
                  </button>
                </div>
              </form>
              <div className="row">
                {this.state.sucess.visibility ? (
                  <Sucess
                    msg={this.state.sucess.msg}
                    click={() => {
                      this.setState({ sucess: { visibility: false, msg: '' } });
                    }}
                  />
                ) : null}

                {this.state.failed.visibility ? (
                  <Failed
                    msg={this.state.failed.msg}
                    click={() => {
                      this.setState({ failed: { visibility: false, msg: '' } });
                    }}
                  />
                ) : null}
              </div>
              <div className="row mt-5">
                <div className="col-md-12 mx-auto mb-4 mt-5">
                  <h1>Categorias Cadastradas</h1>
                </div>
                <div className="col">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>

                    <tbody>{this.state.categories}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryRegister;
