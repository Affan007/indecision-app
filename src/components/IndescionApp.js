import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
export default class IndescionApp extends React.Component{
  state={
    options:[]
  }
  handleDeleteOptions = () =>{
    this.setState(() =>({options:[]}))
  };
  handleDeleteOption = (optionToRemove)=>{
    this.setState((PrevState) =>({
        options:PrevState.options.filter((option) => {
          return optionToRemove !=option
        })
    }))
  };
  handlePick = () =>{
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option =this.state.options[randomNum];
    alert(option);
  };
  handleAddOption = (option) =>{
    if(!option){
      return "Enter valid value to add"
    }
    else if(this.state.options.indexOf(option)>-1){
      return "This item already excists"
    }
    this.setState((prevState) =>({options:prevState.options.concat(option)}))
  }

  componentDidMount(){
    try{
      const json= localStorage.getItem("options");
      const options= JSON.parse(json);
      if(options){
        this.setState(() =>({options}))
      }
    }
    catch(e){
      //doNothing
    }

  }
  componentDidUpdate(prevProps,PrevState){
    if(PrevState.options.length!== this.state.options.lenght){
      const json= JSON.stringify(this.state.options);
      localStorage.setItem("options",json);
    }
  }
  componentWillUnmount(){
    console.log("component will unmount")
  }
  render(){
    const subTitle="Put your life in hands of a computer"
    return(
      <div>
      <Header subTitle={subTitle} />
      <Action
        hasOptions={this.state.options.length>0}
        handlePick={this.handlePick}
        />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption
        handleAddOption={this.handleAddOption}
       />
      </div>
    )
  }
}

IndescionApp.defaultProps={
  options :[]
}
