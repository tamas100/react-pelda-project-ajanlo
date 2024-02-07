import React, { Component } from 'react';
import "./Ajánló.css";

export default class Ajánló extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.deleteAjánló(this.props.id);
    }

  render() {
    return (
      <div className="ajánlók-profil">
        <h3>{this.props.name}</h3>
        <div>{this.props.lakóhely}</div>
        <img src={this.props.kép} alt={this.props.név}/>
        <div>{this.props.ajánlás}</div>
        <button onClick={this.handleClick}>Törlés</button>
      </div>
    );
  }
}
