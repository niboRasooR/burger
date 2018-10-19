import * as actionTypes from './actions'
const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0

  },
  
  totalPrice: 4
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 1, 
  bacon: 0.5
}

//ACTION TYPE-käsittely
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // tässä levitetään staten ingredientsit 
    // uuteen ingredients olioon sisään,
    // pelkkä ingredients osoittaisi suoraan initialStaten olioon

    // HUOMIO [] ei ole tässä taulukko
    // otetaan Ingredients 
    case actionTypes.ADD_INGREDIENT:
      for (let element in state.ingredients){
        console.log( "ADD_INGREDIENT: "+ element + " : " + state.ingredients[element] );
      }
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice:  state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      } 

    case actionTypes.REMOVE_INGREDIENT:
      console.log(" before " + action.ingredientName + " : " + state.ingredients[action.ingredientName])
      
      const igcopy = {
        ...state.ingredients
      }
      for (let element in igcopy){
        console.log( "REMOVE_INGR " + element + " - " + igcopy[element] ); 
      }

      igcopy[action.ingredientName] = igcopy[action.ingredientName] - 1;
      
      return {
        ...state,
        ingredients: igcopy,
        totalPrice:  state.totalPrice - INGREDIENT_PRICES[action.ingredientName]

      }
     

    // jos ei oo mitään niin pitää defaulttistate palauttaa
    default:
      return state;


  }
};

export default reducer;