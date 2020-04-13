import React, { Component } from "react";
/* REDUX */
import { connect } from "react-redux";
import {
  AddNewItem,
  DeleteItem,
  UpdateItem,
} from "../redux/actions/toDoList.actions.js";
/* ANTD */
import { Checkbox, DeleteOutlined, Button } from "antd";
/* STYLE */
import "../assets/styles/css/bootstrap.css";
import "antd/dist/antd.css";
/*   {
          id: 1,
          name: "go to supermarket",
          description: "buy 1 apple",
          done: false,
        }, */
class TableToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <td>
            <Button
              type="link"
              danger
              onClick={() => this.props.DeleteItem_(obj.id)}
            >
              Delete
            </Button>
            {/*   <DeleteOutlined onClick={this.props.DeleteItem_(obj.id)} /> */}
          </td>
        </tr>
      );
    });
  }

  UpdateListRow = (item) => {
    let updatedItem = item;
    updatedItem.done = !updatedItem.done;
    this.props.UpdateItem_(item.id, updatedItem);
  };

  render() {
    let toDoList = this.props.ToDoListRed.toDoList;

    return (
      <table className="table table-hover table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Done</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{this.generateTodoList(toDoList)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return { ToDoListRed: state.ToDoListREDUCER };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddNewItem_: (newItem) => {
      dispatch(AddNewItem(newItem));
    },
    DeleteItem_: (itemID) => {
      dispatch(DeleteItem(itemID));
    },
    UpdateItem_: (itemID, item) => {
      dispatch(UpdateItem(itemID, item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableToDoList);
