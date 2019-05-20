import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
  state = {
    persons: [
      {id:'1',name: 'Max', age: 28},
      {id:'2',name: 'Manu', age: 29},
      {d:'3',name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
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
  render(){
    const stylingButton = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event, )=>this.nameChangedHAndler(event, person.id)}/>
        })}
        </div>
      );
      stylingButton.backgroundColor = 'red';

    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold')
    }


    return (

      <div className="App">
        <h1>Hi I am React App</h1>
        <p className={classes.join('  ')}>This is really working</p>
        <button
        style={stylingButton}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>

    );
  }
}

export default App;
