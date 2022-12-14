import React from "react";
import TodoList from './TodoList';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = { text:'', items: [] } ;
    }

    handleChange = (e) => this.setState({text: e.target.value});

    handleSubmit = (e) => {
        // prevent default form submission
      e.preventDefault(); 

      const newItem = {
        text: this.state.text,
        id: Date.now(),
      }

      this.setState((prevState) => ({ 
        items: [...prevState.items, newItem],
        text:'',
    
    }))
    }

    render() {
        return(
    
        <div>
            <h2>To-Do</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="newToDo">What needs to be done?</label>
                <br/>
                <input 
                    onChange={this.handleChange} 
                    type="text"
                    autoComplete="off"
                    value={this.state.text}
                />
                <button>Add #1</button>
            </form>
            <TodoList items={this.state.items}/>
        </div>

        )
    }
}

export default TodoApp