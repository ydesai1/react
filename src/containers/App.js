import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';
// import Validation from './Validation/Validation';
// import Char from './Char/Char'
class App extends Component {
  // state = {
  //   userInput: ''
  // }
  // inputChangedHandler = (event) => {
  //   this.setState({userInput: event.target.value});
  //
  // }
  //
  // deleteCharHAndler = (index) => {
  //   const text = this.state.userInput.split('');
  //   text.splice(index, 1);
  //   const updatedText = text.join('');
  //   this.setState({userInput: updatedText})
  // }
  // render(){
  //   const charList = this.state.userInput.split('').map((ch,index) => {
  //     return <Char
  //             character={ch}
  //             key={index}
  //             clicked={()=>this.deleteCharHAndler(index)}/>;
  //   });
  //   return(
  //     <div className="App">
  //       <input type="text"
  //         onChange={this.inputChangedHandler}
  //         value={this.state.userInput}/>
  //       <p>{this.state.userInput}</p>
  //       <Validation
  //         inputLength={this.state.userInput.length} />
  //       {charList}
  //     </div>
  //   )
  // }

  constructor(props){
    super(props);
    console.log('[app.js] constructor');

  }
  state = {
    persons: [
      {id:'1',name: 'Max', age: 28},
      {id:'2',name: 'Manu', age: 29},
      {d:'3',name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false
  }

static getDerivedStateFromProps(props, state){
console.log('[app.js] getDerivedStateFromProps', props)
    return state;
}
componentDidMount(){
  console.log('[App.js] componenetDidMount')
}
shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate')
  return true ;
}
componentDidUpdate(){
  console.log('[App.js] componentDidUpdate')
}
nameChangedHAndler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

    this.setState({persons: persons})
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons]
  persons.splice(personIndex,1);
  this.setState({persons: persons})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons : !doesShow});
}

loginHandler = () => {
  this.setState({authenticated: true});
}
  render(){
    console.log('[App.js] render')
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHAndler}
            isAuthenticated={this.state.authenticated} />;
    }

    return (
      <div className={classes.App}>
      <button onClick={()=>{this.setState({showCockpit: false})
    }}>Remove Cockpit
    </button>
    <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler }}>
      {this.state.showCockpit ? (
        <Cockpit
          title = {this.props.appTitle}
            showPersons={this.state.showpersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}

      />

    ) : null}
        {persons}
        </ AuthContext.Provider>
      </div>
    );
  }
}

export default App;
