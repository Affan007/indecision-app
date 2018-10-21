import React from 'react';
//stateless function Option
const Option=(props) =>{
  return(
    <div>
    <div>{props.optionText}</div>
    <button
    onClick={(e) =>{
      props.handleDeleteOption(props.optionText);
    }}
    >Remove
    </button>
    </div>
  )
}
//state options
// class Option extends React.Component {
//   render() {
//     return(
//       <div>{this.props.optionText}</div>
//     )
//
//   }
// }

export default Option;
