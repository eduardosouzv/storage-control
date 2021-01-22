import React from 'react';
import axios from 'axios';

import Sucess from '../components/sucessMessage';
import Failed from '../components/failMessage';

class CategoryRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryRegister;
