import React, { Component } from 'react';
import List from './Components/List';
import GroceryFrom from './Components/GroceryForm';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    gr_list: [
      { id: 1, name: "Apples", complete: true, price: "$0.25" },
      { id: 2, name: "Bananas", complete: false, price: "$0.40"},
      { id: 3, name: "Chicken", complete: false, price: "$1.99"},
    ],
    filter: 'All'
  }
  
  setFilter = (filter) => {
    this.setState({ filter })
  }
  
  handleClick = (id) => {
    const { gr_list } = this.state;
    this.setState({
      gr_list: gr_list.map( list => {
        if (list.id === id) {
          return {
            ...list,
            complete: !list.complete
          }
        }
        return list
      })
    })
  }
  
  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  
  addItem = (name) => {
    const { gr_list } = this.state;
    const list = { name, id: this.getUniqId(), complete: false }
    this.setState({ gr_list: [list, ...gr_list]});
  }

  
  visibleItems = () => {
    const { gr_list, filter } = this.state;
    switch(filter) {
      case 'Need to Buy':
        return gr_list.filter( l => !l.complete)
      case 'Bought':
        return gr_list.filter( l => l.complete )
      default:
        return gr_list;
    }
  };
  
  render(){
    const { filter } = this.state;
    
    return(
      <>
        <GroceryFrom addItem={this.addItem} />
        <List name="Grocery List" items={this.visibleItems()} todoClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </>
    );
  }
}

export default App;