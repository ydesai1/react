import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] getDerivedStateFromProps...')
  //   if(nextProps.persons !== this.props.persons ||
  //       nextProps.change !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked){
  //     return true;
  //   }else{
  //       return false;
  //   }
  //
  // }
  getSnapshotBeforeUpdate(nextProps, nextState){
    console.log('[Persons.js] getSnapshotBeforeUpdate...')
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, preState, snapshot){
    console.log('[Persons.js] componentDidUpdate...');
    console.log(snapshot );
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }

  render(){
    console.log('[Person.js] rendering..');
    return this.props.persons.map((person, index) => {
      return (<Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event, )=> this.props.changed(event, person.id)}
            isAuth={this.props.isAuthenticated}
            />
          );
      });
  }
}


export default Persons;
