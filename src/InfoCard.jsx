import React from "react";

class InfoCard extends React.Component {
    // constructor(props) {
    //   super(props);


    // }
  
    
  render() {

          const {info} =this.props

          return (
            <div style={{ width: '18rem', border: '1px solid rgba(0,0,0,0.125)', margin: '1rem', padding: '1rem' }}>
                <img alt="100%x180" style={{ width: '100%', display: 'block' }} src={info.image} />
                <div>
                <h2>{info.cardTitle}</h2>
                <p>{info.cardDescription}</p>
                <a href={info.button.url}>{info.button.label}</a>
                </div>
            </div>
          )
    }
}
export default InfoCard