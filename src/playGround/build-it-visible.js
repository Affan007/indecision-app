class VisibilityToggle extends React.Component{
  constructor(props){
    super(props)
    this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
    this.state={
      showIt:false,
      buttonText:"Show It"
    };
  }
  handleToggleVisibility(){
    this.setState((prevState) =>{
        if(prevState.showIt==false){
          return{
              showIt: !prevState.showIt,
              buttonText:"Show It"
          }
        }
        else{
          return{
              showIt: !prevState.showIt,
              buttonText:"Hide It"
          }
        }
    });
  }
  render(){
    return(
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>{this.state.buttonText}</button>
      {this.state.showIt && <p>here is the text to show or hide on click</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'))
// let buttonText ='Show It'
// let showit=false;
// const showHide=() =>{
// showit=!showit;
// if(showit==false){
//   buttonText ='Show It'
// }
// else{
//   buttonText ='Hide It'
// }
// renderToDom()
// }
// const appRoot= document.getElementById("app");
// const renderToDom =() =>{
//   const template=(
//     <div>
//     <h1>Visibility Toggle</h1>
//       <button onClick={showHide}>{buttonText}</button>
//     {showit && <p>here is some thing to show and hide</p>}
//     </div>
//   );
//   ReactDOM.render(template,appRoot)
// }
// renderToDom();
