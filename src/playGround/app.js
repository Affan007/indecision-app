class IndescionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOptions=this.handleAddOptions.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.state={
      options:props.options
    };
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
  handleDeleteOptions(){
    this.setState(() =>({options:[]}))
  }
  handleDeleteOption(optionToRemove){
    this.setState((PrevState) =>({
        options:PrevState.options.filter((option) => {
          return optionToRemove !=option
        })
    }))
  }
  handlePick(){
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option =this.state.options[randomNum];
    alert(option);
  }
  handleAddOptions(option){
    if(!option){
      return "Enter valid value to add"
    }
    else if(this.state.options.indexOf(option)>-1){
      return "This item already excists"
    }
    this.setState((prevState) =>({options:prevState.options.concat(option)}))
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
      <AddOptions
        handleAddOptions={this.handleAddOptions}
       />
      </div>
    )
  }
}

IndescionApp.defaultProps={
  options :[]
}

//stateless function Header
 const Header=(props) => {
   return(
     <div>
     <h1>{props.title}</h1>
     {props.subTitle && <h2>{props.subTitle}</h2>}
     </div>
   );
 }
 Header.defaultProps ={
   title:'Indecision App'
 }
//state Heaser
// class Header extends React.Component {
//   render(){
//     return(
//       <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subTitle}</h2>
//       </div>
//     );
//   }
// }

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

class AddOptions extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state={
      error:undefined
    }
  }
  handleAddOption(e) {
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


ReactDOM.render(<IndescionApp />,document.getElementById('app'));
