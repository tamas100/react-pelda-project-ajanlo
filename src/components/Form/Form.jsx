import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        ajánlás: ""
    };
    handleChange = (e) => {
        this.setState({ajánlás: e.target.value});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.insertAjánló(this.state.ajánlás);
    };
  render() {
    return (
      <form action='#' method='GET' onSubmit={this.handleSubmit}>
        Ajánlás:
        <label>
            <input type="text" 
                   onChange={this.handleChange} 
                   value={this.state.ajánlás} 
                   name='ajánlás' />
        </label>
        <button type='submit'>Ajánló betöltése</button>
      </form>
    );
  }
}
