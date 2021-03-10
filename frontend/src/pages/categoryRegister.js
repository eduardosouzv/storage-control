import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

import { SucessMessage } from '../components/SucessAlert';
import { FailMessage } from '../components/FailedAlert';
import { ConfirmationModal } from '../components/ConfirmationModal';

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

      modalVisibility: false,
      id: '',
      name: '',

      confirmationVisibility: false,
      confirmationContent: '',
    };
  }

  componentDidMount = () => {
    this.getCategories();
  };

  getCategories = async () => {
    const response = await axios.get('http://localhost:3001/category/categories');
    var el = [];

    if (!response.data) {
      this.setState({ categories: [] });
      return;
    }

    response.data.map((product) =>
      el.push(
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <i
              className="fas fa-pen fa-2x"
              title="Editar"
              style={{ cursor: 'pointer', paddingRight: '18px' }}
              onClick={() => {
                axios.get(`http://localhost:3001/category/${product.id}`).then((res) => {
                  this.setState({
                    modalVisibility: true,
                    name: res.data[0].nome,
                    id: res.data[0].id,
                  });
                });
              }}
            ></i>
            <i
              className="fas fa-trash-alt fa-2x"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                this.setState({ id: product.id });
                this.setState({ confirmationContent: product.name, confirmationVisibility: true });
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
    this.setState({
      sucess: { visibility: false, msg: '' },
      failed: { visibility: false, msg: '' },
    });

    if (this.state.category_name.length === 0) {
      this.setState({ failed: { visibility: true, msg: 'Campo em branco.' } });
    } else {
      axios
        .post('http://localhost:3001/category/create', { name: this.state.category_name })
        .then((res) => {
          this.setState({ sucess: { visibility: true, msg: 'Cadastrado.' } });
          this.getCategories();
        });
    }
  };

  hideModal = () => {
    this.setState({ modalVisibility: false });
  };

  hideConfirmation = () => {
    this.setState({ confirmationVisibility: false });
  };

  sendChange = () => {
    axios
      .put('http://localhost:3001/category/edit', { id: this.state.id, name: this.state.name })
      .then(() => {
        this.setState({ modalVisibility: false });
        this.getCategories();
      });
  };

  onChangeModalInput = (e) => {
    this.setState({ name: e.target.value });
  };

  onConfirmationDelete = () => {
    this.setState({
      sucess: { visibility: false, msg: '' },
      failed: { visibility: false, msg: '' },
    });
    axios.delete(`http://localhost:3001/category/delete/${this.state.id}`).then((res) => {
      if (!res.data) {
        this.setState({
          failed: { visibility: true, msg: 'Categoria cadastrada em algum produto' },
        });
      } else {
        this.setState({ sucess: { visibility: true, msg: 'Excluido' } });
        this.getCategories();
      }
      this.setState({ confirmationVisibility: false });
    });
  };

  onConfirmationDiscard = () => {
    this.setState({ confirmationVisibility: false });
  };

  render() {
    return (
      <div>
        <div className="form-group row">
          <div className="mx-auto mt-5">
            <div className="col-md-12 mx-auto mb-4">
              <h1>Cadastro de Categoria</h1>
            </div>

            <ConfirmationModal
              visibility={this.state.confirmationVisibility}
              content={this.state.confirmationContent}
              hide={this.hideConfirmation}
              onConfirm={this.onConfirmationDelete}
              onDiscard={this.onConfirmationDiscard}
            />

            <Modal animation={false} show={this.state.modalVisibility} onHide={this.hideModal}>
              <Modal.Header>Confirmar Edição</Modal.Header>
              <Modal.Body>
                <label>Nome de categoria</label>
                <div className="input-group mb-3">
                  <input
                    defaultValue={this.state.name}
                    type="text"
                    className="form-control"
                    onChange={this.onChangeModalInput}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-dark" type="button" onClick={this.sendChange}>
                      Alterar
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>

            <div className="container">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome da categoria"
                    onChange={this.changeCatName}
                  />
                </div>

                <div className="float-right">
                  <button type="button" className="btn btn-dark" onClick={this.sendCatName}>
                    Cadastrar
                  </button>
                </div>
              </form>
              <div className="row">
                {this.state.sucess.visibility ? (
                  <SucessMessage
                    msg={this.state.sucess.msg}
                    click={() => {
                      this.setState({ sucess: { visibility: false, msg: '' } });
                    }}
                  />
                ) : null}

                {this.state.failed.visibility ? (
                  <FailMessage
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
