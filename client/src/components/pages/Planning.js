import React, { Component } from 'react';
import ToDoItems from "../layout/toDoItems"
import Container from "../layout/Container"
import axios from "axios";


class Planning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["test2", "test2", "test3"]
        };
        this.addItem = this.addItem.bind(this);
    }

    //pushes user input into array
    addItem(e) {

        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        //once a value has been submitted we clear it out
        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }

    //when anything changes in the "enter task" field, this functions updates the DOM and state
    handleChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;
        console.log(name, value);

        this.setState({ [name]: value });

    }

    //this part saves the item on the list to route. The route must then save to database.
    saveTask = (event) => {
        event.preventDefault();
        const { item } = this.state;
        axios.post("/todos", item).then((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <Container>
                <div className="planningMain">
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            {/* <input ref={(a) => this._inputElement = a} */}
                            {/* placeholder="enter task"> */}
                            {/* </input> */}
                            <input name="item" onChange={this.handleChange} value={this.item} />
                            <button onClick={this.saveTask} type="submit">add</button>

                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="category-container">
                    <h3>To Do</h3>
                    {this.state.items.map(item => (
                        <ToDoItems
                        key={item._id}
                        item={item}
                        />
                    ))}
                    </div>
                </div>
            </Container>
        )
    };
    
}
//create axios call to grab info from state and send it to /routes/todo.js. take each item and bring all the info I want


  




export default Planning;
