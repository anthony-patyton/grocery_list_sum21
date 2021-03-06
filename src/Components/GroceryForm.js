import React from 'react';

class GroceryForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' });
  }
  
  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
        value       = {name}
        name        = "name"
        onChange    = {this.handleChange}
        placeholder = "Add an item"
        required
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default GroceryForm;