import  React, {Component} from "react";
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary';

import {connect} from 'react-redux';

import ContactData from './ContactData'
class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1, 
            meat: 1, 
            cheese: 1,
            bacon: 1
        }
    }

    // EI ENÄÄ TARVITA REDUXIN KANSSA
    /*
    componentDidMount() {
        const query = 
            new URLSearchParams(this.props.location.search);
        const passedingredients = {}; 

        
        for (let param of query.entries()){
            //['salad', '1']
            console.log( 'höystö querystä: ' + param[0])
            passedingredients[param[0]] = +param[1]; // + kääntää numeroks
        }
        this.setState(
            {
                ingredients: passedingredients
            }
        )
    }*/

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        console.log("  Kutsutaan routtia checkout/contact-data")
        this.props.history.replace('/checkout/contact-data');
    }

    // SUMMARY OF CHECKOUT
    //  ROUTE --- wtf moment!!!
    // Eli match.path on tää polku
    // siihen lisätään contact-data
    // componentin määrittely lopuksi 
    render(){
        console.log(this.props.match.path );
        return (
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinued}
                        ingredients={this.props.ings}/>
               
                <Route 
                    path={this.props.match.path +'/contact-data'}
                    component={ContactData} />
            </div>
           
        )
    }

}
//nimet reducer.js mukaan
const mapStateToProps = state => {
    return {
        ings: state.ingredients

    }
}

export default connect(mapStateToProps)(Checkout);