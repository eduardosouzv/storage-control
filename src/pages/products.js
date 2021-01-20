import React from 'react';
import axios from 'axios';

import TableLine from '../components/table_content_line';

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

  changeQuantity = (e) => {
    this.setState({ quantity: e.target.value });
  };

  changePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  formatPrice(prc) {
    var formattedString = prc.replace(',', '.');
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

  sendProduct = () => {
    var qtdParsed = parseInt(this.state.quantity);

    if (this.state.name.length === 0 && this.state.quantity.length === 0 && this.state.price.length === 0) {
      console.log('blank');
    } else if (isNaN(qtdParsed)) {
      console.log('err qtd');
    } else if (isNaN(this.formatPrice(this.state.price))) {
      console.log('err price');
    } else {
      console.log('ok');
      axios
        .post('http://localhost:3001/product/register', {
          name: this.state.name,
          quantity: qtdParsed,
          price: this.formatPrice(this.state.price),
        })
        .then((res) => {
          console.log(res.data);
        });
    }
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
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" className="form-control" autoComplete="off" onChange={this.changeName} />
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="quantity">Quantidade</label>
                      <input id="quantity" type="text" className="form-control" autoComplete="off" onChange={this.changeQuantity} />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="price">Preço</label>
                      <input id="price" type="text" className="form-control" autoComplete="off" onChange={this.changePrice} />
                    </div>
                  </div>

                  <div>
                    <button type="button" className="btn btn-dark" onClick={this.sendProduct}>
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
                    <TableLine id="1" name="produto" quantity="32" price="9999,00" />
                    <TableLine id="1" name="produto" quantity="32" price="9999,00" />
                    <TableLine id="1" name="produto" quantity="32" price="9999,00" />
                    <TableLine id="1" name="produto" quantity="32" price="9999,00" />
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
