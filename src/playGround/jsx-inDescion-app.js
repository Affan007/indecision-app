console.log('app.js is running');
//JSX - javascript XML
const app={
  title: 'Indescion App',
  subtitle:'Put your descion in hands of a computer',
  options:[]
}
const onFromSubmit=(e) =>{
  e.preventDefault();
  const option= e.target.elements.options.value
  if(option){
    app.options.push(option);
    e.target.elements.options.value='';
    RerenderValueAdded();
  }
}
const removeAll=() => {
  app.options.length=0;
  RerenderValueAdded();
}
const onMakeDescion= () =>{
  const randomNum = Math.floor(Math.random()*app.options.length);
  const option =app.options[randomNum];
  alert(option);

}
const appRoot =document.getElementById('app')
const RerenderValueAdded= () =>{
  const template=(
    <div>
     <h1>{app.title}</h1>
     {app.subtitle && <p>{app.subtitle}</p>}
     <p>{app.options && app.options.length>0 ? 'Here are your options':'No options'}</p>
     <button disabled={app.options.length ===0} onClick={onMakeDescion}>What should I do?</button>
     <button onClick={removeAll}>Remove All</button>
     <ol>
       {
         app.options.map((option,key)=>{
         return <li key={key}>{key}: {option}</li>
       })
       }
     </ol>
     <form onSubmit={onFromSubmit}>
     <input type="text" name="options"/>
     <button>Add Options</button>
     </form>
    </div>
  );
  ReactDOM.render(template,appRoot);
}
RerenderValueAdded();
