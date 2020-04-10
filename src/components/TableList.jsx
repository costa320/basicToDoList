import React, { Component } from "react";
/* ANTD */
import { Checkbox } from "antd";
/* STYLE */
import "../assets/styles/css/bootstrap.css";
import "antd/dist/antd.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {
          id: 1,
          name: "go to supermarket",
          description: "buy 1 apple",
          done: false,
        },
        {
          id: 2,
          name: "take out the dog",
          description: "",
          done: false,
        },
      ],
    };
  }

  generateTodoList(list) {
    return list.map((obj) => {
      return (
        <tr key={obj.id}>
          <th scope="row">{obj.id}</th>
          <td>
            <Checkbox
              checked={obj.done}
              onChange={() => this.UpdateListRow(obj)}
            ></Checkbox>
          </td>
          <td>{obj.name}</td>
          <td>{obj.description}</td>
        </tr>
      );
    });
  }

  UpdateListRow = (row) => {
    let rowIndex = this.state.toDoList.findIndex((x) => x.id === row.id);
    let updatedList = this.state.toDoList;

    if (rowIndex !== undefined) {
      updatedList[rowIndex].done = !row.done;
      this.setState({ toDoList: updatedList });
    }
  };

  render() {
    return (
      <table className="table table-hover table-dark m-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Done</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>{this.generateTodoList(this.state.toDoList)}</tbody>
      </table>
    );
  }
}
