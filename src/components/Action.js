import React from 'react';
//stateless function Action
const Action=(props) =>{
  return(
    <div>
  <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do</button>
    </div>
  );
}

// state Action
// class Action extends React.Component {
//   render(){
//     return(
//       <div>
//     <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do</button>
//       </div>
//     );
//   }
// }
export default Action;
