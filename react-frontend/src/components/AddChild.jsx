import React, { Component } from 'react';
import ChildService from '../services/ChildService';

class AddChild extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '', 
           name:'',
           age:'',  
           toy:'',
           cost:'' 
        }
        
        this.saveChild = this.saveChild.bind(this);
        this.idHandler = this.idHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.ageHandler = this.ageHandler.bind(this); 
        this.toyHandler = this.toyHandler.bind(this);
        this.costHandler = this.costHandler.bind(this);
    }
     
    idHandler=(event) => {this.setState({id: event.target.value});}
    nameHandler=(event) => {this.setState({name: event.target.value});}
    ageHandler=(event) => {this.setState({age: event.target.value});}
    toyHandler=(event) => {this.setState({toy: event.target.value});}
    costHandler=(event) => {this.setState({cost: event.target.value});}

    saveChild = (e) => {
        e.preventDefault();
        let child={
           id: this.state.id,
           name: this.state.name,
           age: this.state.age,
           toy: this.state.toy,
           cost: this.state.cost,
        };
        console.log(child);
        ChildService.createChild(child).then(res =>{
            console.log(res, "checking response")
            this.props.history.push('/children');              
        }).catch(err=>{
                console.log("record not saved.");
                console.log(err)
        });

    }//save child method closed 

    cancel(){
        this.props.history.push('/children');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> Add Child </h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Child ID: </label>
                                        <input placeholder="Id" name="id" className="form-control"
                                        value={this.state.id} onChange={this.idHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Child Name: </label>
                                        <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.nameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Child Age: </label>
                                    <input placeholder="Age" name="age" className="form-control"
                                    value={this.state.age} onChange={this.ageHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Child Toy: </label>
                                    <input placeholder="Toy" name="toy" className="form-control"
                                    value={this.state.toy} onChange={this.toyHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Toy Cost: </label>
                                    <input placeholder="Cost" name="cost" className="form-control"
                                    value={this.state.cost} onChange={this.costHandler}/>
                                </div>
                                 <button className="btn btn-success" onClick={this.saveChild}> Save </button>
                                 <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }

export default AddChild;