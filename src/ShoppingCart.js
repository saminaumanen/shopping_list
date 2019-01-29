import React, { Component } from "react";
import CartTable from "./CartTable";


class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      todos: []
    };
  }

  TaskChangeHandler = e => {
    this.setState({
      task: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    const { date, task } = this.state;
    const todoItem = {
      date,
      task
    };

    this.setState({
      todos: [...this.state.todos, todoItem],
      task: ""
    });
  };

  deleteTodo = key => {
    const todos = this.state.todos.filter((todo, i) => i !== key);
    this.setState({
      todos
    });
  };

  onDelete(key) {
    this.deleteTodo(key);
}

  render() {
    return (
      <div class="container" id="ShoppingCart">
        <h1 className="title">Shopping list</h1>
        <form onSubmit={this.addTodo}>
          <div>
            <p>
              <input
                type="text"
                className="input"
                onChange={this.TaskChangeHandler}
                value={this.state.task}
                placeholder="Add to cart"
              />
            </p>
            <p>
              <input className="button is-primary" type="submit" value="Add" />
            </p>
          </div>
        </form>
        <br />

        <div>
          <CartTable
            todos={this.state.todos}
            onDelete={this.onDelete.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
