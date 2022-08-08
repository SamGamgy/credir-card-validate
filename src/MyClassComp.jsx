import React from "react";

class MyClassComp extends React.Component {
    
    // constructor is for initialized objects that will be used for all class instances
    constructor(props) {
        // super() is required to access Parent Class if this class extends another class ie React.Component
        super(props);
        this.names = ['Sam','Jason','Laila','Noah'];
        // init state
        this.state = {
            name: '',
            date: new Date(),
            // this state is pulling its value from the prop attribute that is initalized in the return, and assign a value in App.js when the class instance is created with a propName attribute value.
            // To pass in props into State, you must add props as a parameter into constructor() and into super()
            // init a state value from a custom prop
        }
    }
    // array data could also be initiated out here
    // names = ['Sam','Jason','Laila','Noah'];

    // life cycle Method
    componentDidMount() {
        // this.timeId = setInterval(() => this.tick(), 1000); 
    }

    tick = () => this.setState( {date: new Date()})

    shuffle = () => {
        const i = Math.floor(Math.random()* this.names.length);
        this.setState({ name: this.names[i]})
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    // render() method available from React.Component
    render() {
        // destructuring state variables
        const {name, date} = this.state
        // // destructing prop values
        // const { propName, anotherProp } = this.props


        return (
            <div style={{margin:'1rem 50%'}}>
                <h2>Hello {name}</h2>
                <h2>It is {date.toLocaleTimeString()}</h2>
                <button onClick={this.shuffle}>Click Me</button>
            </div>
            
        )
    }
}

// in order to use you need to export
export default MyClassComp;