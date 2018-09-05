import React, {Component} from 'react';
import style from './bIngredient.css';
import PropTypes from 'prop-types';

class bIngredient extends Component {
    
    constructor(props){
        super(props);
    }
    
    
    render(){
        let ing = null;

        switch (this.props.choise){
            case('bread-bottom'):
                ing = <div className={style.BreadBottom}></div>
                break;
            case('bread-top'):
               ing = (
                <div className={style.BreadTop}>
                    <div className={style.Seeds1}></div>
                    <div className={style.Seeds2}></div>
                </div>);
                break;
            case('meat'):
                ing = <div className={style.Meat}></div>
                break;
            case('cheese'):
                ing = <div className={style.Cheese}></div>
               break;
            case('bacon'):
                 ing = <div className={style.Bacon}></div>
           
                 break;
            case('salad'):
                 ing = <div className={style.Salad}></div>
                break;
            default:
    
                 ing = <div className={style.Cheese}></div>
            break;
         
           
        }
        return ing;
    }
    
    
}

bIngredient.PropTypes = {
    choise: PropTypes.string.isRequired
}

export default bIngredient;
