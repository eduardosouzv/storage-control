import React from 'react';

class FailMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="alert alert-danger alert-dismissible fade show">
          <strong>Erro !</strong> {this.props.msg}
          <button type="button" className="close" data-dismiss="alert" onClick={this.props.click}>
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default FailMessage;
