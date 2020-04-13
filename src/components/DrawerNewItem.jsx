import React, { Component } from "react";
/* REDUX */
import { connect } from "react-redux";
import {
  AddNewItem,
  DeleteItem,
  UpdateItem,
} from "../redux/actions/toDoList.actions.js";
/* ANTD */
import { Button, Drawer, Form, Input, Checkbox, message } from "antd";
/* COMPONENTS */
/* EXTRAS */
import { UUID } from "../extras/UUID.js";
/* STYLE */
import "../assets/styles/css/bootstrap.css";

class DrawerNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  /* DRAWER */
  onDrawerClose = () => {
    this.setState({ visible: false });
  };
  onDrawerOpen = () => {
    this.setState({ visible: true });
  };
  /* FORM */
  onFormFinish = (itemsValues) => {
    console.log(itemsValues);
    try {
      itemsValues.id = UUID();
      this.props.AddNewItem_(itemsValues);
      message.success("Item added succesfully");
      this.setState({ visible: false });
    } catch {
      message.error("Something went wrong, please retry later");
    }
  };

  onFormReset = () => {
    const [form] = Form.useForm();
    form.resetFields();
  };

  render() {
    /*  id: 1,
          name: "go to supermarket",
          description: "buy 1 apple",
          done: false,
        }, */
    let s = this.state;
    return (
      <div className="w-100 mt-5">
        <Button type="primary" block onClick={this.onDrawerOpen}>
          Add New Item
        </Button>

        <Drawer
          title="Basic Drawer"
          placement={"right"}
          closable={true}
          onClose={this.onDrawerClose}
          visible={s.visible}
          destroyOnClose={true}
        >
          <Form
            name="Add new Item"
            initialValues={{ remember: false }}
            onFinish={this.onFormFinish}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>

            <Form.Item name="done" valuePropName="checked">
              <Checkbox>Done</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="mr-5">
                Add Item
              </Button>
              <Button htmlType="button" onClick={this.onFormReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNewItem);
