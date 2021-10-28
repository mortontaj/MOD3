import React, { Component } from "react";
import ChildService from "../services/ChildService";

class ListChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
    };
    this.addChild = this.addChild.bind(this);
    this.editChild = this.editChild.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
    this.viewChild = this.viewChild.bind(this);
  }

  componentDidMount() {
    ChildService.getChildren().then((res) => {
      this.setState({ children: res.data });
    });
  }

  addChild() {
    this.props.history.push("/add-child");
  }

  editChild(id) {
    this.props.history.push(`/update-child/${id}`);
  }

  deleteChild(id) {
    this.props.history.push(`/delete-child/${id}`);
    // ChildService.deleteChild(id).then(res => {
    //     this.setState({
    //          Child: this.state.Childs.filter(Child => Child.id !== id)
    //     })
    // })
  }

  viewChild(id) {
    this.props.history.push(`/view-child/${id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Children's List</h2>
        <div>
          <button className="btn btn-primary" onClick={this.addChild}>
            {" "}
            Add Child
          </button>
        </div>
        <div>
          <p></p>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Child ID No.</th>
                <th>Child Name</th>
                <th>Child Age</th>
                <th>Child Toy</th>
                <th>Toy Cost $</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.children.map((child) => (
                <tr key={child.id}>
                  <td>#{child.id}</td>
                  <td>{child.name}</td>
                  <td>{child.age} yrs</td>
                  <td>{child.toy}</td>
                  <td>${child.cost}</td>
                  <td>
                    <button
                      onClick={() => this.editChild(child.id)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteChild(child.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewChild(child.id)}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListChildren;
