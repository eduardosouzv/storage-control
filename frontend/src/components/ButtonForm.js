import React from 'react';

export class ButtonForm extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className={this.props.bClass} onClick={this.props.click}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
