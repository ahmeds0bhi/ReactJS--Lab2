import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      totalTasks: 0,
      min: 0,
      max: 10,
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.setState({
          tasks: response.data,
          totalTasks: response.data.length,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  NextTasks = () => {
    const { min, max, totalTasks } = this.state;
    if (max + 10 <= totalTasks) {
      this.setState({
        min: min + 10,
        max: max + 10,
      });
    } else {
      this.setState({
        min: 0,
        max: 10,
      });
    }
  };

  PrevTasks = () => {
    const { min, max, totalTasks } = this.state;
    if (min - 10 >= 0) {
      this.setState({
        min: min - 10,
        max: max - 10,
      });
    } else {
      this.setState({
        min: totalTasks - 10,
        max: totalTasks,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">To-DO</th>
                <th scope="col">Completed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task) => {
                if (task.id > this.state.min && task.id <= this.state.max) {
                  return (
                    <tr>
                      <th scope="row" key={task.id}>
                        {task.id}
                      </th>
                      <td>{task.title}</td>
                      <td>
                        {task.completed ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="green"
                            class="bi bi-check2-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="red"
                            class="bi bi-x-octagon"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                        )}
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-dark" onClick={this.PrevTasks}>
              Previous
            </button>
            <button className="btn btn-outline-dark" onClick={this.NextTasks}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
