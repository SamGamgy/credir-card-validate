import React from "react";

class PlanetList extends React.Component {
    constructor () {
        super();
        this.state = {
            name: 'Planet',
            dots: true,
            text: '',
            planets: [ {label:"Mars"}, {label:"Venus"}, {label:"Jupiter"}, {label:"Earth"}, {label:"Saturn"}, {label:"Neptune"} ],
        }
            
        }

    nameChange = () => {
        let altName = "Solar System"
        if (this.state.name === "Planet"){this.setState({name: altName})}
        else {this.setState({name: "Planet"})}
    }

    toggleDots = () =>{
        let list = document.querySelector('ul')

        if (this.state.dots === true) {
            this.setState({dots: false});
            
            list.style.listStyle='none';
        }
        else {
            this.setState({dots: true});
            list.style.listStyle='initial';
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            label: this.state.text
        }

        this.setState((prevState) => ({
            planets: [...prevState.planets, newItem ],
            text: '',
        }))
    }
    handleChange = (e) => {
        this.setState({text:e.target.value})
    };

    

    render () {

        // const htmlList = planets.map((planet) => <li>{planet}</li>)

        return (
            <div>
                <button onClick={this.nameChange}>Alternate Name</button>
                <button onClick={this.toggleDots}>Toggle Bullet Points</button>
                <div> {this.state.name} List </div>
                <ul>
                {this.state.planets.map((planet) => <li>{planet.label}</li>)}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange} 
                        type="text"
                        autoComplete="off"
                        value={this.state.text} 
                        placeholder='New Planet Name'
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default PlanetList 