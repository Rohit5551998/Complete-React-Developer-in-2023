import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: { firstName: 'Rohit', lastName: 'Chawhan' },
    //   academy: 'ZTM',
    // };

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1',
        },
        {
          name: 'Frank',
          id: '2',
        },
        {
          name: 'Jacky',
          id: '3',
        }
      ]
    }
  }

  render() {
    return (
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

      <div className='App'>
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>;
          })
        }
      </div>
    );
  }
}

export default App;
