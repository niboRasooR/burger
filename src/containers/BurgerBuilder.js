import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary'
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 1, 
  bacon: 0.5
}

class BurgerBuilder extends Component {
  constructor (props){
    super(props);
   // this.state = {...}
  }
  
  state = {
    ingredients: {
      salad: 0, 
      bacon: 0, 
      cheese: 0,
      meat: 0

    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients){
      const igcopy ={
        ...ingredients
      }
      if(this.state.purchaseable ==false){
        console.log("PUCHASEABLE FALSE");
      }
      let sumOfAllAmounts  = 
      Object.keys(ingredients).map(ingredient => {
        // palauttaa arvon  jonka reduce ottaa
        return ingredients[ingredient];
      }).reduce((sumOfAllAmounts, oneAmount) => {
        return sumOfAllAmounts + oneAmount;
      } ,0);

      console.log(" SUM " +  sumOfAllAmounts);
      if (sumOfAllAmounts > 0 ){
        this.setState({purchaseable: true })
      }else this.setState({purchaseable: false})
          
  }

  removeIngredientHandler = (choise) => {
    const oldCount = this.state.ingredients[choise];

    console.log("Choise " + choise + " " + oldCount);
    if(oldCount <= 0) {
      console.log( "RETURN");
      return;
    }

    const counted = oldCount - 1;

    //levitä vanhat ingredientsit uuteen
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[choise] = counted;
    const priceDeduction = INGREDIENT_PRICES[choise];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })

    this.updatePurchaseState(updatedIngredients);

  }

  addIngredientHandler = (choise) => {
    const oldCount = this.state.ingredients[choise];

    console.log(" CHOISE: " + choise  + " " + oldCount)
    const counted = oldCount +1;

    //levitä vanhat ingredientsit uuteen
    const updatedIngredients = {
      ...this.state.ingredients
    }

    //Lisää yksi 
    console.log("counted _ "  + counted);
    updatedIngredients[choise] = counted;
    const priceAddition = INGREDIENT_PRICES[choise];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice, ingredients: updatedIngredients
    })


    this.updatePurchaseState(updatedIngredients);
  }

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

    const paramsArray = []
    
    // kaikki taulukkoon ja enkoodaus URI-muotoiseksi
    for (let i in this.state.ingredients){
      paramsArray.push( encodeURIComponent(i) + "=" +
        encodeURIComponent(this.state.ingredients[i]));
    }

    // yhdistä taulukon alkiot rimpsuun
    const queryString = paramsArray.join('&');

    // TUO PITÄÄ PARSIA checkout-componentissa
    this.props.history.push({
          pathname: '/checkout',
          search: '?' + queryString
    })



  }


  render() {

    const disabledInfo = {
      ...this.state.ingredients

     };

     //disabledInfo builds key value pairs
     //{ salad: true, meat: false..}
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    } 

      return (
       
        <Aux>
          <Modal show={this.state.purchasing}  >
            <OrderSummary ingredients={this.state.ingredients}
             modalClosed={this.cancelPurchaseHandler} 
             continue={this.purchaseContinueHandler}/>
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          
            <BuildControls
              price={this.state.totalPrice}
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo}
              ingredients={this.state.ingredients}
              purc={this.state.purchaseable}
              ordered={this.purchaseHandler}
              ></BuildControls>
         
        </Aux>
      );

  }


}

export default BurgerBuilder;