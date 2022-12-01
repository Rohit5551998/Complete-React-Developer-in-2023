import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Rohit', lastName: 'Chawhan' },
      academy: 'ZTM',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName},
            I learn at {this.state.academy}.
          </p>
          <button onClick={() => {
            this.setState({ name: { firstName: 'Yihua', lastName: 'Zhang' } });
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
