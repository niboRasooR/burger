import React from 'react';
import styles from './Burger.css';
import BIngredient from './Ingredient/BIngredient'
const burger = (props) => {

  let transformedIngredients = 
        Object.keys(props.ingredients)
        .map(igKey => {
          return [...Array(props.ingredients[igKey])]
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

export default burger;