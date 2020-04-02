import React, { Component } from "react";
import "./style.css";


class Form extends Component {
    
    state = { 
        name: ""
    };

    handleInputChange = event => { 

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => { 
        event.preventDefault();

        console.log(`${this.state.name}`);

        this.setState({
            name: ""
        });

        console.log(`${this.state.name}`);


    };

    render() { 

        return (
          <div>
            <form className="form">
                <input
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Search..."
                />
                <button onClick ={this.handleFormSubmit}>Search</button>
            </form>
          </div>
        )
    }
}

export default Form;