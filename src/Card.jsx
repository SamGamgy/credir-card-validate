import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ 
                background: "#efefef", 
                color: 'black', 
                padding: '1.5rem', 
                borderRadius: "10px", 
                textAlign:'left', 
                boxShadow: '2px 2px 2px #00000099'
                }}
            >
                <h1 style={{marginTop: 0}}>Captain Kickflip 🛹</h1>

                <p style={{
                    margin: 0, 
                    fontSize: '1.5rem', 
                    fontWeight: '500'
                }}

                >Full-Stack <strike>Developer</strike> of Pancakes</p>
                
                <div style={{margin: '.5rem 0'}}>{'⭐️'.repeat(4)}</div>
            </div>
        )
    }
}

export default Card