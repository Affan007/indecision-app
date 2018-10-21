import React from 'react';
export default class AddOption extends React.Component {
  state={
      error:undefined
  }
  handleAddOption =(e) => {
    e.preventDefault()
    const option= e.target.elements.options.value.trim();
    const error =this.props.handleAddOptions(option)
    this.setState(() => ({error}))
    if(!error){
      e.target.elements.options.value=""
    }
    // if(option){
    //   this.props.handleAddOptions(option);
    // }
  }
  render() {
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="options"/>
      <button>Add Option</button>
      </form>
      </div>
    );
  }
}
