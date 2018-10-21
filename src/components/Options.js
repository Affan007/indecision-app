import React from 'react';
import Option from './Option';
//stateless function options
const Options=(props) =>{
  return(
    <div>
    {props.options.length ===0 && <p>Please add an options to get started</p>}
      <button onClick={props.handleDeleteOptions}> Remove All</button>
    {
      props.options.map((option,key) => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
         />
       ))
    }
    </div>
  );
}
//State option
// class Options extends React.Component{
//   render(){
//     return(
//       <div>
//         <button onClick={this.props.handleDeleteOptions}> Remove All</button>
//       {
//         this.props.options.map((option,key) => <Option key={option} optionText={option} />)
//       }
//       </div>
//     );
//   }
// }
//stateless function Options
export default Options;
