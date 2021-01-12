// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'afaf', name: 'Max', age: 28 },
      { id: 'agdbd', name: 'Manu', age: 29 },
      { id: 'aw3rd', name: "Stephanie", age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false   
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice (personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) => {
    this.setState ( {
      persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: "Stephanie", age: 26 }
      ]
    } );
  }
  
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
    }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: 'is solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler (index)}
              name={person.name} 
              age={person.age} 
              key = {person.id} />
          })}
        </div>
      )
    }
  
    return (
      <div className = "App">
        <h1>Hello guys!</h1>
        <p>This is really working!</p>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
        // return React.createElement('div', {className: 'App"}, React.createElement('h1', null, 'Hello guys!'))
}

export default App;



// switchNameHandler = (newName) => {
//   // console.log ('Was clicked!');
//   // DON'T DO THIS: personsState.persons[0].name = 'Maximilian';
//   this.setState ( {
//     persons: [
//     { name: newName, age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: "Stephanie", age: 27 }
//     ]
//   } );
// };

// if (this.state.showPersons) {
//   persons = (
//     <div>
//       {this.state.persons.map(person => {
//         return <Person 
//           name={person.name} 
//           age={person.age} />
//       })}
//       <Person 
//         name={this.state.persons[0].name} 
//         age={this.state.persons[0].age} />
//       <Person 
//         name={this.state.persons[1].name} 
//         age={this.state.persons[1].age}
//         click={this.switchNameHandler.bind( this, 'Max!' )}
//         changed={this.nameChangedHandler} >
//         My Hobbies: Racing </Person>       
//       <Person 
//         name={this.state.persons[2].name} 
//         age={this.state.persons[2].age} />
//     </div>
//   )


// return (
//   <div className = "App">
//     <h1>Hello guys!</h1>
//     <p>This is really working!</p>
//     <button 
//       style = {style}
//       onClick={this.togglePersonsHandler}>Toggle Persons</button>
//     { 
//         this.state.showPersons === true ? 
//           <div>
//             <Person 
//               name={this.state.persons[0].name} 
//               age={this.state.persons[0].age} />
//             <Person 
//               name={this.state.persons[1].name} 
//               age={this.state.persons[1].age}
//               click={this.switchNameHandler.bind( this, 'Max!' )}
//               changed={this.nameChangedHandler} >
//               My Hobbies: Racing </Person>       
//             <Person 
//               name={this.state.persons[2].name} 
//               age={this.state.persons[2].age} />
//           </div> : null
//     }



// const App = props => {
//   // class App extends Component {
//     const [personsState, setPersonsState] = useState ( {
//     // state = {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: "Stephanie", age: 26 },
//       ],
//       showPersons: false   
//     } );
  
//     const [otherState, setOtherState] = useState ('some other value')
  
//     console.log (personsState)
  
//     const switchNameHandler = (newName) => {
//       // console.log ('Was clicked!');
//       // DON'T DO THIS: personsState.persons[0].name = 'Maximilian';
//       setPersonsState ( {
//         persons: [
//         { name: newName, age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: "Stephanie", age: 27 }
//         ]
//       } );
//     };
  
//     const nameChangedHandler = (event) => {
//       setPersonsState ( {
//         persons: [
//         { name: 'Max', age: 28 },
//         { name: event.target.value, age: 29 },
//         { name: "Stephanie", age: 26 }
//         ]
//       } );
//     }
    
//     togglePersonsHandler = () => {
//         const doesShow = this.state.showResons;
//         this.setState({showPersons: !doesShow})
//       }
  
//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: 'is solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     }
    
//     return (
//       <div className="App">
//         <h1>Hello guys!</h1>
//         <p>This is really working!</p>
//         <button 
//           style = {style}
//           onClick={() => togglePersonsHandler}>Switch Name</button>
//         {/* <button onClick={switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
//           { this.state.showPersons === true ? 
//             <div>
//               <Person 
//                 name={personsState.persons[0].name} 
//                 age={personsState.persons[0].age} />
//               <Person 
//                 name={personsState.persons[1].name} 
//                 age={personsState.persons[1].age}
//                 click={switchNameHandler.bind(this, 'Max!')}
//                 changed={nameChangedHandler} >
//                 My Hobbies: Racing </Person>       
//               <Person 
//                 name={personsState.persons[2].name} 
//                 age={personsState.persons[2].age} />
//               {/* <Person name="Max" age="28" />
//               <Person name="Manu" age="29" >My Hobbies: Racing</Person>
//               <Person name="Stephanie" age="26" /> */}
//             </div> : null
//             } 
//       </div>
//     );
//       // return React.createElement('div', {className: 'App"}, React.createElement('h1', null, 'Hello guys!'))
//   }
  
//   export default App;