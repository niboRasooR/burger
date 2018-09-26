import React, { Component } from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary'

import * as actionTypes from '../store/actions'


// SIIRRETTY REDUCERIIN
/*const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 1, 
  bacon: 0.5
}*/

class BurgerBuilder extends Component {
  constructor (props){
    super(props);
   // this.state = {...}
  }
 
  //INGREDIENTSIT VITTUUN statestä
  // totalPrice myös poiis
  // purchaseable pois
  state = {
  
    purchasing: false
  }


  updatePurchaseState(ingredients){
    console.log("Updatepurchasestate")
      const igcopy ={
        ...ingredients
      }
      
      let sum = 0;
      for(let element in ingredients){
        console.log(element);
        
      }
      
      let sumOfAllAmounts  = 
      Object.keys(ingredients).map(ingredient => {
        // palauttaa arvon  jonka reduce ottaa
        return ingredients[ingredient];
      }).reduce((sumOfAllAmounts, amountOfThisIngredient) => {
     
        if(isNaN(amountOfThisIngredient)) amountOfThisIngredient = 0;
        return sumOfAllAmounts + amountOfThisIngredient;
      } ,0);

      console.log(" SUM " +  sumOfAllAmounts);

      //TÄTÄ STATEA EI ENÄÄ KÄYTETÄ VAAN 
      // KUTSUTAANKIN TÄMÄ METODI ALLA Render
      /*if (sumOfAllAmounts > 0 ){
        this.setState({purchaseable: true })
      }else this.setState({purchaseable: false})*/

      return sumOfAllAmounts > 0;
          
  }

  // NÄITÄ EI TARVITA EIKÄ TOIMIKAAN
  /*
  removeIngredientHandler = (choise) => {
    const oldCount = this.props.ings[choise];

    console.log("Choise " + choise + " " + oldCount);
    if(oldCount <= 0) {
      console.log( "RETURN");
      return;
    }

    const counted = oldCount - 1;

    //levitä vanhat ingredientsit uuteen
    const updatedIngredients = {
      ...this.props.ings
    }

    updatedIngredients[choise] = counted;
    const priceDeduction = INGREDIENT_PRICES[choise];
    const oldPrice = this.props.price;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })

    this.updatePurchaseState(updatedIngredients);

  }

  addIngredientHandler = (choise) => {
    const oldCount = this.props.ings[choise];

    console.log(" CHOISE: " + choise  + " " + oldCount)
    const counted = oldCount +1;

    //levitä vanhat ingredientsit uuteen
    const updatedIngredients = {
      ...this.props.ings
    }

    //Lisää yksi 
    console.log("counted _ "  + counted);
    updatedIngredients[choise] = counted;
    const priceAddition = INGREDIENT_PRICES[choise];
    const oldPrice = this.props.price;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })


    this.updatePurchaseState(updatedIngredients);
  }*/

  purchaseHandler = () =>{
    this.setState({ purchasing: true });

  }

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false});
  }

  purchaseContinueHandler  = () => {
    console.log("BurgerBuilder: puchaseContinueHandler")

    // ROUTINGIA!!!
    // Rykäise uusi sivu päälle
    //this.props.history.push( '/checkout');

    // TAI TOINEN oliolla
    //MUTTA: Nyt ei enää käytetä queryParamsia
    /*const paramsArray = []
    // kaikki taulukkoon ja enkoodaus URI-muotoiseksi
    for (let i in this.props.ings){
      paramsArray.push( encodeURIComponent(i) + "=" +
        encodeURIComponent(this.props.ings[i]));
    }

    // yhdistä taulukon alkiot rimpsuun
    const queryString = paramsArray.join('&');
*/
    // TUO PITÄÄ PARSIA checkout-componentissa
    //,
   // tämä pois kun käytetää redux 
   /* this.props.history.push({
          pathname: '/checkout',
          search: '?' + queryString
    })*/
    this.props.history.push('/checkout');
  }

  render() {
    const disabledInfo = {
      ...this.props.ings

     };

     //disabledInfo builds key value pairs
     //{ salad: true, meat: false..}
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    } 

    ///   VAIHTUU
    //  ingredientAdded={this.addIngredientHandler}
    //ingredientRemoved={this.removeIngredientHandler}
    // this state purchaseable ei passata enää
    // VAAN METODIKUTSU - parametrinä this.props.ings
    console.log("INGS: ")
    for(let element in this.props.ings){
      console.log(element);
    }
      return ( 
        <Aux>
          <Modal show={this.state.purchasing}  >
            <OrderSummary ingredients={this.props.ings}
             modalClosed={this.cancelPurchaseHandler} 
             continue={this.purchaseContinueHandler}/>
          </Modal>
          <Burger ingredients={this.props.ings}/>
          
            <BuildControls
              price={this.props.price}
              ingredientAdded={this.props.onIngredientAdded}
              ingredientRemoved={this.props.onIngredientRemoved}
              disabled={disabledInfo}
              ingredients={this.props.ings}
              purc={this.updatePurchaseState(this.props.ings)}
              ordered={this.purchaseHandler}
              ></BuildControls>
         
        </Aux>
      );

  }


}

const mapStateToProps = state =>{
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),

    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})

  } 
}

export default connect(mapStateToProps, mapDispatchToProps) (BurgerBuilder)
;