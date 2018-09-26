import React from 'react';
import style from './ContactData.css';
import {connect} from 'react-redux';
class ContactData extends React.Component {
    
    state =  {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }

    };
    componentDidMount(){
        console.log(" contactdata did mouunt")
    }

    componentWillUpdate(){}

    render(){

        return(
            <div className={style.ContactData} >
                <h4>Enter info</h4>             
            <p> PRICE : { this.props.price}</p>   
               <form>
                    <input type="text" name="name" placeholder="your name" />
                    <input type="email" name="email" placeholder="email" />

                    <input type="text" name="street" placeholder="street"/>
                     <input type="text" name="postalCode" placeholder="postal code"/>
                     <button>Complete Order</button>
                </form>
            </div>
            
        );
    }
    
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients, 
        price: state.totalPrice
    }
}
export default connect(mapStateToProps) (ContactData);