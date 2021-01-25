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
            <button style={{ border: 'none' }} onClick={this.props.click}>
              <i class="fas fa-pen-square fa-2x" title="Editar"></i>
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default TableLine;
