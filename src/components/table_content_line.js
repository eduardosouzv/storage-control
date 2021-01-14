import React from 'react';

class TableLine extends React.Component {
  constructor(props) {
    super(props);

    this.props = {
      id: '',
      name: '',
      quantity: '',
      price: '',
    };
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.quantity}</td>
          <td>R$ {this.props.price}</td>
        </tr>
      </>
    );
  }
}

export default TableLine;
