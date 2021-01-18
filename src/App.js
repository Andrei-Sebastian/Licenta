import './App.css';
import React ,{Component} from 'react';
import Post from './components/Posts/Posts';
import NavBar from './components/NavigationMenu/NavBar';
import LeftMenu from './components/LeftMenu/LeftMenu';

class App extends Component{
  state = { 
    persons: [
      { id: '1', name: 'Max', age: 28},
      { id: '2', name: 'Alex', age: 29},
      { id: '3', name: 'George', age: 28}
    ],
    otherState: "some other value",
    showPersons: false,

  }

  // change name
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);
    //console.log(event.target.value);
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  render(){
    // let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       {this.state.persons.map((person, index) => {
    //         return  <Person 
    //           click={() => this.deletePersonHandler(index)}
    //           name={person.name} 
    //           age={person.age}
    //           key={person.id}
    //           changed={(event) => this.nameChangeHandler(event, person.id)} />
    //       })}
    //     </div>
    //   );

    // }

    // let classes = [];

    // if(this.state.persons.length <= 2) {
    //   classes.push('red');
    // }
    // if(this.state.persons.length <= 1) {
    //   classes.push('bolt');
    // }

    return (
      <div className="App">
        <NavBar/>
        <div className="page">
          <LeftMenu/>
          <Post/>
        </div>
        <h1>.</h1>
      </div>
    );
  }
 
}

export default App;
