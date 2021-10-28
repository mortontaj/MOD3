import React, { Component } from 'react';
import ChildService from '../services/ChildService';

class ViewChild extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 child:{}

             }
        
    }
    
     componentDidMount()
     {
        ChildService.getChildById(this.state.id).then((res) =>{
            this.setState({child:res.data})
         });
     }
     
    
    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Child Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>Child ID: </label>
                                    <input placeholder={this.state.child.id} readOnly={true} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Child Name: </label>
                                      <input placeholder={this.state.child.name} readOnly={true} name="name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Child Age: </label>
                                      <input placeholder={this.state.child.age} readOnly={true} name="age" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                      <label>Child Toy: </label>
                                      <input placeholder={this.state.child.toy} readOnly={true} name="toy" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                      <label>Toy Cost: </label>
                                      <input placeholder={this.state.child.cost} readOnly={true} name="cost" className="form-control" />
                                   </div>   
                                                                     
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewChild;