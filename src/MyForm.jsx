import React from "react";

class MyForm extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '' ,
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value)
        this.setState({value: ''})
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({value: e.target.value});
        
    }

    render() {
        
        console.log(this.state.value)
        return(
            <form onSubmit={this.onSubmit} action="">
                <label htmlFor="">
                    Name:
                    <input onChange= {this.onChange} type="text" name='name' value={this.state.value} />
                </label>
                <input disabled={!this.state.value.length} type="submit" value='submit' name="" id="" />
            </form>
        )
    }
}

export default MyForm