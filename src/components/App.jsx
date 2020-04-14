import React, { Component } from "react";
/* COMPONENTS */
import TableList from "./TableList.jsx";
import DrawerNewItem from "./DrawerNewItem.jsx";
/* STYLE */
import "../assets/styles/css/bootstrap.css";
import "../assets/styles/css/app.css";

export default class App extends Component {
  /*   constructor(props) {
    super(props);
    this.state = {
    };
  } */

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <DrawerNewItem />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <TableList />
          </div>
        </div>
      </div>
    );
  }
}
