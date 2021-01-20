import React from 'react';
import axios from 'axios';

class CategoryRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: '',
    };
  }

  changeCatName = (e) => {
    this.setState({ category_name: e.target.value });
  };

  sendCatName = () => {
    if (this.state.category_name.length === 0) {
      console.log('merda');
    } else {
      axios.post('http://localhost:3001/category/create', { name: this.state.category_name });
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

            <div className="container mt-2">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryRegister;
