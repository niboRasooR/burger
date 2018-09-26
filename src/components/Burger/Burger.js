import React from 'react';

// Tässä erikoistoiminto jolla injektoidaan 
// routing propit
//  muista: higher order component
// kääritään tämä paska tuohon
import { withRouter } from 'react-router-dom';

import styles from './Burger.css';
import BIngredient from './Ingredient/BIngredient'
const burger = (props) => {

  let transformedIngredients = 
        Object.keys(props.ingredients)
        .map(igKey => {
          console.log("MAPPING: " +igKey + " - "+ props.ingredients[igKey] )
          return [...Array( props.ingredients[igKey] )]
          .map((_, i) => 
          { return <BIngredient key={igKey + i} choise={igKey} />;});
        })
        .reduce((prevValArray, curElementArray ) => {
          return prevValArray.concat(curElementArray);
        }, []);

  if (transformedIngredients.length === 0){
      transformedIngredients = <p>Just add some ingredients!</p>
  }
        console.log(transformedIngredients);

  
  return (
    <div className={styles.Burger}>
      <BIngredient choise="bread-top"></BIngredient>
        {transformedIngredients}
      <BIngredient choise="bread-bottom"></BIngredient>
    </div>
  );


};

//kääritään koko paska että saadaan routingin erikoispropit
export default withRouter(burger);