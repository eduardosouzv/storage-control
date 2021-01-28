import React from 'react';
import Modal from 'react-bootstrap/Modal';

class Confirmation extends React.Component {
  render() {
    return (
      <div>
        <Modal animation={false} show={this.props.visibility} onHide={this.props.hide}>
          <Modal.Header>Confirmar Alterações</Modal.Header>
          <Modal.Body>
            <h4>
              Deseja excluir <b>{this.props.content}</b> ?
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={this.props.onDiscard}>
              Descartar
            </button>
            <button className="btn btn-success" onClick={this.props.onConfirm}>
              Confirmar
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Confirmation;
