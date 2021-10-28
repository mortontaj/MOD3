import React, { Component } from 'react';
import ChildService from '../services/ChildService';

class DeleteChild extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name: '',
                 age: '',
                 toy: '',
                 cost: ''  
             }
     
        
        this.deleteChild = this.deleteChild.bind(this);
    }

     componentDidMount()
     {
        ChildService.getChildById(this.state.id).then((res) =>{
          let child = res.data;
          this.setState({name:child.name,
                 age:child.age,
                 toy:child.toy,
                 cost:child.cost
          });
        });
     }
     
  deleteChild = (e) => {
        e.preventDefault();
        let child={
           id: this.state.id,
           name: this.state.name,
           age: this.state.age,
           toy: this.state.toy,
           cost: this.state.cost
        };

        console.log(child);
        ChildService.deleteChild(child, this.state.id).then(res => {
            
            this.props.history.push('/children');
        })
      
        
    }

    cancel(){
        this.props.history.push('/children');
    }

    render() {
        // grade = toy
        // create form section for toy cost
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Child</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Child ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Child Name: </label>
                                      <input placeholder={this.state.name} readOnly= "true" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Child Age: </label>
                                      <input placeholder={this.state.age} readOnly="true" name="age" className="form-control"
                                         value={this.state.age} onChange={this.ageHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Child Toy: </label>
                                      <input placeholder={this.state.toy} readOnly="true" name="toy" className="form-control"
                                         value={this.state.toy} onChange={this.toyHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Toy Cost: </label>
                                      <input placeholder={this.state.cost} readOnly="true" name="cost" className="form-control"
                                         value={this.state.cost} onChange={this.costHandler} />
                                   </div> 
                                    <button className="btn btn-success" onClick={this.deleteChild}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteChild;