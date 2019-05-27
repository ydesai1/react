import React, {Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  static contextType = AuthContext;

  componentDidMount(){
    document.querySelector('input').focus();
    console.log(this.context.authenticated, 'this.context.authenticated')
  }
  render(){
    console.log('[person.js] rendering...')
    return(
    <Aux>
    {this.context.authenticated ? <p>Authenticated </p> : <p>please login</p>}


        <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key='i2'>{this.props.children}</p>
        <input key='i3' type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux>
  )
  }


}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
