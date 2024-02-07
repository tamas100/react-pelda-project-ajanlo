import React, { Component } from "react";
import './App.css';
import Ajánló from "./components/Ajánló/Ajánló";
import Form from "./components/Form/Form";
import axios from "axios"

const API_URL = "https://randomuser.me/api/";
export default class App extends Component {
  state = {
    ajánlók: []
  };
  insertAjánló = (ajánlás) => {
    axios
      .get(API_URL)
      .then((resp) => {
        const users = resp.data.results;
        if (users.length > 0) {
          const user = users[0];
          this.setState({
            ajánlók: [
              ...this.state.ajánlók,
              {
                név: `${user.name.first} ${user.name.last}`,
                lakóhely: `${user.location.city}, ${user.location.country}`,
                kép: user.picture.large,
                ajánlás,
                key: user.login.uuid
              },
            ]
          });
        }
      })
      .catch(() => {
        console.log("Hibás lekérdezés");
      });
  };
  deleteAjánló = (id) => {
    this.setState({
      ajánlók: this.state.ajánlók.filter((ajánló) => ajánló.key !== id),
    });
  };
  getAjánlóComponentList = () => {
    return this.state.ajánlók.map((ajánló) => (
      <Ajánló
        név={ajánló.név}
        lakóhely={ajánló.lakóhely}
        kép={ajánló.kép}
        ajánlás={ajánló.ajánlás}
        key={ajánló.key}
        id={ajánló.key}
        deleteAjánló={this.deleteAjánló}
      />
    ));
  };
  render() {
    return (
      <div className="App" >
        <Form insertAjánló={this.insertAjánló} />
        <div className="Empfehlungen">{this.getAjánlóComponentList()}</div>
      </div>
    );
  }
}


