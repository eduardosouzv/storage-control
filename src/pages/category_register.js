import React from 'react';

class CategoryRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: '',
    };
  }

  render() {
    return (
      <>
        <div className="form-group row">
          <div className="mx-auto mt-5">
            <div className="col-md-12 mx-auto mb-4">
              <h1>Cadastro de Categoria</h1>
            </div>

            <div className="container mt-2">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nome da categoria" />
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

export default CategoryRegister;
