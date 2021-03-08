import React from 'react';
import axios from 'axios';

import TableLine from '../components/table_content_line';
import Sucess from '../components/sucessMessage';
import Failed from '../components/failMessage';
import Button from '../components/button_form';
import Confirmation from '../components/confirmation_modal';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      price: '',
      category_id: '',

      categories: [],
      products: [],
      id: '',

      sucess: {
        visibility: false,
        msg: '',
      },
      failed: {
        visibility: false,
        msg: '',
      },

      editButtonVisibility: false,

      confirmationVisibility: false,
      confirmationContent: '',
    };
  }

  componentDidMount() {
    this.getCatNames();
    this.getProducts();
  }

  getCatNames = async () => {
    const response = await axios.get('http://localhost:3001/product/category');
    this.setState({
      categories: response.data,
    });
  };

  getProducts = async () => {
    const response = await axios.get('http://localhost:3001/product/products');
    if (response.data) {
      this.setState({
        products: response.data,
      });
    }
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeQuantity = (e) => {
    this.setState({ quantity: e.target.value });
  };

  onChangePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  onChangeCategory = (e) => {
    this.setState({ category_id: e.target.value });
  };

  formatPrice(prc) {
    var formattedString = String(prc).replace(',', '.');
    var formattedPrice = parseFloat(formattedString).toFixed(2);
    if (!isNaN(formattedPrice)) {
      var split = formattedPrice.split('.');
      if (split[0].length > 6) {
        return NaN;
      } else {
        return formattedPrice;
      }
    }
  }

  verifyFields = () => {
    var qtdParsed = parseInt(this.state.quantity);
    if (
      this.state.name.length === 0 ||
      this.state.quantity.length === 0 ||
      this.state.price.length === 0 ||
      this.state.category_id.length === 0
    ) {
      this.setState({ failed: { visibility: true, msg: 'Campos em branco.' } });
      return false;
    } else if (isNaN(qtdParsed)) {
      this.setState({ failed: { visibility: true, msg: 'Quantidade invalida.' } });
      return false;
    } else if (isNaN(this.formatPrice(this.state.price))) {
      this.setState({ failed: { visibility: true, msg: 'Preço invalido.' } });
      return false;
    } else {
      return true;
    }
  };

  sendProduct = () => {
    this.setState({
      sucess: { visibility: false, msg: '' },
      failed: { visibility: false, msg: '' },
    });

    if (this.verifyFields()) {
      axios
        .post('http://localhost:3001/product/register', {
          name: this.state.name,
          quantity: parseInt(this.state.quantity),
          price: this.formatPrice(this.state.price),
          categories_id: this.state.category_id,
        })
        .then(() => {
          this.getProducts();
          this.setState({ sucess: { visibility: true, msg: 'Produto cadastrado.' } });
        });
    }
  };

  sendChange = () => {
    this.setState({
      sucess: { visibility: false, msg: '' },
      failed: { visibility: false, msg: '' },
    });
    if (this.verifyFields()) {
      axios
        .put('http://localhost:3001/product/edit', {
          name: this.state.name,
          quantity: parseInt(this.state.quantity),
          price: this.formatPrice(this.state.price),
          categories_id: this.state.category_id,
          id: this.state.id,
        })
        .then(() => {
          this.getProducts();
          this.setState({ editButtonVisibility: false });
          this.setState({
            name: '',
            quantity: '',
            price: '',
            category_id: '',
          });

          this.setState({ sucess: { visibility: true, msg: 'Produto editado.' } });
        });
    }
  };

  onConfirmationDiscard = () => {
    this.setState({ confirmationVisibility: false });
  };

  hideConfirmation = () => {
    this.setState({ confirmationVisibility: false });
  };

  onConfirmationDelete = () => {
    axios.delete(`http://localhost:3001/product/delete/${this.state.id}`).then(() => {
      this.getProducts();
      this.setState({ confirmationVisibility: false });
    });
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

              <Confirmation
                visibility={this.state.confirmationVisibility}
                content={this.state.confirmationContent}
                hide={this.hideConfirmation}
                onConfirm={this.onConfirmationDelete}
                onDiscard={this.onConfirmationDiscard}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mt-2">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Nome</label>
                    <input
                      value={this.state.name}
                      id="name"
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="cat">Categoria</label>
                    <select
                      value={this.state.category_id}
                      className="form-control"
                      onChange={this.onChangeCategory}
                    >
                      <option defaultValue></option>
                      {this.state.categories
                        ? this.state.categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                      value={this.state.quantity}
                      id="quantity"
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      onChange={this.onChangeQuantity}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="price">Preço</label>
                    <input
                      value={this.state.price}
                      id="price"
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      onChange={this.onChangePrice}
                    />
                  </div>
                </div>

                <div>
                  {this.state.editButtonVisibility ? (
                    <Button
                      bClass="btn btn-primary"
                      text="Salvar alterações"
                      click={this.sendChange}
                    />
                  ) : (
                    <Button bClass="btn btn-dark" text="Cadastrar" click={this.sendProduct} />
                  )}
                </div>
                <div className="mt-2">
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

            <div className="row mt-5">
              <div className="col">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Ações</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.products.map((product) => (
                      <TableLine
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        quantity={product.quantity}
                        price={product.price}
                        category={product.category_name}
                        editClick={() => {
                          this.setState({
                            sucess: { visibility: false, msg: '' },
                            failed: { visibility: false, msg: '' },
                          });
                          window.scrollTo(0, 0);
                          this.setState({ editButtonVisibility: true });
                          this.setState({
                            name: product.name,
                            quantity: product.quantity,
                            price: product.price,
                            category_id: product.categories_id,
                            id: product.id,
                          });
                        }}
                        delClick={() => {
                          this.setState({
                            confirmationContent: product.name,
                            confirmationVisibility: true,
                            id: product.id,
                          });
                        }}
                      />
                    ))}
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
