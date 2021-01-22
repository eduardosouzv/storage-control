import React from 'react';

class SucessMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="alert alert-success alert-dismissible fade show">
          <strong>Sucesso !</strong> {this.props.msg}
          <button type="button" className="close" data-dismiss="alert" onClick={this.props.click}>
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default SucessMessage;
