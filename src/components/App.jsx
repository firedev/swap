import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import store from '../store';

// import Word from './Word.jsx';

// import logo from '../logo.svg';
// import '../App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      shuffled: ''
    }
  }
  update(e){
    let shuffled_arr = ((input) => {
      let input_arr = Array.from(e.target.value)
      for (let i = input.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [input[i - 1], input[j]] = [input[j], input[i - 1]];
      }
      return input;
    })(Array.from(e.target.value));

    this.setState({input: e.target.value})
    this.setState({shuffled: shuffled_arr})

  }
  render() {
    return (
      <div className="App">
      <input type="text"
        onChange={this.update.bind(this)} />
      <h1>{this.state.input}</h1>
      <h1>{this.state.shuffled}</h1>
      </div>
    );
  }
}

export default App;

/*const SwapApp = () => (
  <div>
    <Word />
  </div>
);

export default (
  <Provider store={store}>
    <SwapApp />
  </Provider>
)*/
