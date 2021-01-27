import React from 'react';

class TableLine extends React.Component {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.quantity}</td>
          <td>R$ {this.props.price}</td>
          <td>{this.props.category}</td>
          <td>
            <i
              className="fas fa-pen fa-2x"
              title="Editar"
              style={{ cursor: 'pointer', paddingRight: '18px' }}
              onClick={this.props.editClick}
            ></i>
            <i className="fas fa-trash-alt fa-2x" style={{ cursor: 'pointer' }} onClick={this.props.delClick}></i>
          </td>
        </tr>
      </>
    );
  }
}

export default TableLine;
