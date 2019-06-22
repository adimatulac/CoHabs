import React, { Component } from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Item from './Item.jsx';
import AddItem from './AddItem.jsx';
import HeaderBar from './HeaderBar.jsx';
import Welcome from './Welcome.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


class App extends Component {
  state = {
    list: [
      { name: 'Jess', type: 'Guests', message: 'Gonna have 4-5 friends over tmrw', id: 1 },
      { name: 'Jason', type: 'Piano Practice', message: 'practicing for recital tonight. Sorry about the noise!', id: 2 },
      { name: 'Angelli', type: 'Guests', message: 'gonna have 2 friends over on Thursday', id: 3 }
    ]
  }
  addItem = (item) => {
    item.id = Math.random();
    let list = [...this.state.list, item];
    this.setState({
      list: list
    })
  }
  deleteItem = (id) => {
    let newList = this.state.list.filter(item => {
      return item.id !== id;
    })
    this.setState({
      list: newList
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <HeaderBar /> 
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <AccountsUIWrapper align="center" /></div>
        </div> 
        
        <Welcome />
        <Item deleteItem={this.deleteItem} list={this.state.list} />
        <AddItem addItem={this.addItem} />

        

      </div>
    );
  }
}

export default App;
