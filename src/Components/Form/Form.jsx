import React from "react";
import InputBase from "../InputBase/InputBase";
import "./Form.css";
import { OTHERCARDS } from '../constants';
import { cardExpireValidation, cardNumberValidation, onlyTextValidation, securityCodeValidation } from "../validations";

const INIT_CARD = {
    card: '',
    cardHolder: '',
    expiry: '',
    securityCode: '',
}

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            cardData: INIT_CARD,
            maxLength: OTHERCARDS.length,
            error: {},
            cardType: null,
        }
    }

    findDebitCardType = (cardNumber) => {
        const regexPattern ={
            MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
            VISA: /^4[0-9]{2,}$/,
            AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
            DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/
        };
        for (const card in regexPattern) {
            if (cardNumber.replace(/[^\d]/g, '').match(regexPattern[card])) return card;
        }
        return '';
    }

    handleValidations = (type, value) => {
        let errorText;
        switch(type) {
            case 'card':
                errorText = cardNumberValidation(value)
                this.setState((prevState) => ({
                    cardType: this.findDebitCardType(value),
                    error: {
                        ...prevState.error,
                        cardError: errorText,
                    },
                }));
                break;
            case 'cardHolder':
                errorText = onlyTextValidation(value);
                this.setState((prevState) => ({
                    error: {...prevState.error, cardHolderError:errorText}
                }))
                break;
            case 'expiry':
                errorText = cardExpireValidation(value);
                this.setState((prevState) => ({
                    error: {...prevState.error, expiryError:errorText}
                }))
                break;
            case 'securityCode':
                errorText = securityCodeValidation(3, value);
                this.setState((prevState) => ({
                    error: {...prevState.error, securityCodeError:errorText}
                }))
                break;
            default:
                break;
        }
    }

    handleBlur = (e) => {
        // capture name and value to pass to another function
        this.handleValidations(e.target.name, e.target.value);
    }

    handleInputData = (e) => {
        // masking card num

        if (e.target.name === 'card') {

            // 
            let mask = e.target.value.split(' ').join('');
            if(mask.length) {

                  // defines value of mask. match return array of regexp and globally looks through mask, and adds every 4 characters in a array item. .joins then returns all items in a string with spaces in between.
                
                mask= mask.match(new RegExp('.{1,4}', 'g')).join(' ');
                this.setState((prevState) => ({cardData: {...prevState.cardData, [e.target.name]: mask}}
                    )) 
            } else {
                this.setState((prevState) => ({cardData: {...prevState.cardData, [e.target.name]: ''}}
                    )) 
            }
        } else {
            this.setState((prevState) => ({cardData: {...prevState.cardData, [e.target.name]: e.target.value}}
                )) 
        }
        
    }

    checkErrorBeforeSave = () => {
        let errorValue = {};
        let isError = false;
        Object.keys(this.state.cardData).forEach((val) => {
            if (!this.state.cardData[val].length) {
                errorValue= { ...errorValue, [`${val}Error`]: 'Required'};
                isError = true;
            }
        });
        Object.keys(this.state.error).forEach((val) => {
            if (this.state.error[val].length) {
                // errorValue= { ...errorValue, [`${val}Error`]: 'Required'};
                isError = true;
            }
        });

        this.setState({ error: errorValue });
        return isError;
    }

    handleAddCard = (e) => {
        e.preventDefault();

        const errorCheck = this.checkErrorBeforeSave();

       if (!errorCheck) {
        this.setState({
            cardData: INIT_CARD,
            cardType: null,
        })
       }
       else{alert('Please fix Errors')}
    }

    render() {

        // const test = this.setState({error: 'hello'})
        const {cardData, cardType, error, maxLength } = this.state

        const inputData = [
            { label: 'Card Number', name: 'card', type:'text', error: 'cardError'},
            { label: 'CardHolder\'s Name', name: 'cardHolder', type:'text', error: 'cardHolderError'},
            { label: 'Expiry Date (MM/YY)', name: 'expiry', type:'text', error: 'expiryError'},
            { label: 'Security Code', name: 'securityCode', type:'text', error: 'securityCodeError'},
        ]
        return(
            <div>
                <h1>Add New Card</h1>
                <form onSubmit={this.handleAddCard}>
                    {inputData.length ? inputData.map((item) => (
                         <InputBase
                        placeholder={item.label}
                        type={item.type}
                        value={cardData && cardData[item.name]}
                        onChange={this.handleInputData}
                        autoComplete='off'
                        maxLength={maxLength}
                        name={item.name}
                        onBlur={this.handleBlur}
                        error={error}
                        cardType={cardType}
                        isCard={item.name === 'card'}
                        errorM={
                            (error
                            && error[item.error]
                            && error[item.error].length > 1)
                            ? error[item.error]
                            : null
                        }
                    />
                    )): null}
                    
                    <div className="btn-wrapper">
                        <InputBase type="submit" value="Add Card"/>
                    </div>
                </form>
            </div>
         )
    }
}

export default Form


// let obstacle = [ 'problem', 'problem', 'problem', 'problem'];

// const cycle = {key: 'sacrifice', rest: 1000}

// function overcomeObstacle (cycle) {
//     for( let i = 0; i <= obstacle.length; i++) {

//         setTimeout(obstacle.splice(i, 1, (cycle.key)),cycle.rest)

//         if (!obstacle.includes('problem')) {
    
//             return obstacle = 'overcome'
//         }
//     }    
// };

// overcomeObstacle(cycle);