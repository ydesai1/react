import React, { useEffect } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
  //   useEffect(() => {
  //   console.log('[cockpit.js] useEffect');
  //   setTimeout(() => {
  //     alert('saved data to cloud');
  //   }, 1000);
  //   return () => {
  //   console.log('[cockepit.js] cleanup work in use Effect');}
  // }, []);
  const assignedClasses = [];

   let btnClass = '';

   if(props.showPersons){
     btnClass= classes.Red;
  }

  if(props.personsLength <=2){
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <=1){
    assignedClasses.push(classes.bold)
  }

    return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join('  ')}>This is really working</p>
          <button
            className={btnClass}
            onClick={props.clicked}>Switch Name
          </button>
          <AuthContext.Consumer>
          {context => <button onClick={context.login}>Log In</button>}
          </AuthContext.Consumer>
      </div>
);

};
export default React.memo(cockpit);
