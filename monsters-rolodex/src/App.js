import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: { firstName: 'Rohit', lastName: 'Chawhan' },
    //   academy: 'ZTM',
    // };

    this.state = {
      // monsters: [
      // {
      //   name: 'Linda',
      //   id: '1',
      // },
      // {
      //   name: 'Frank',
      //   id: '2',
      // },
      // {
      //   name: 'Jacky',
      //   id: '3',
      // }
      // ]
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        },
      )
      );
  }

  // render() {
  // return (
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Hi {this.state.name.firstName} {this.state.name.lastName},
  //       I learn at {this.state.academy}.
  //     </p>
  //     <button onClick={() => {
  //       // this.setState({ name: { firstName: 'Yihua', lastName: 'Zhang' } });
  //       // Ensuring console.log runs after state is updated through secondary callback
  //       this.setState(() => {
  //         return {
  //           name: { firstName: 'Yihua', lastName: 'Zhang' }
  //         }
  //       },
  //         () => {
  //           console.log(this.state);
  //         });
  //     }}>Change Name</button>
  //   </header>
  // </div>
  // );
  // }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })

    return (
      <div className='App' >
        <input className='search-box' type='search' placeholder='Search Monsters'
          onChange={onSearchChange} />
        {/* {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>;
          })
        } */}
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
