import React from 'react';
import style from './ContactData.css';
import {connect} from 'react-redux';
import Input from '../../../components/UI/Input/Input'
class ContactData extends React.Component {
    
    state =  {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },


    };
    componentDidMount(){
        console.log(" contactdata did mouunt")
    }

    componentWillUpdate(){}


    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render(){
        let form = (
            <form>
            <Input inputtype="input" type="text" name="name" placeholder="your name" />
            <Input inputtype="input" type="email" name="email" placeholder="email" />
            <Input inputtype="input" type="text" name="street" placeholder="street"/>
            <Input inputtype="input"  type="text" name="postalCode" placeholder="postal code"/>


            <input type="text" name="name" placeholder="your name" />
            <input type="email" name="email" placeholder="email" />

            <input type="text" name="street" placeholder="street"/>
             <input type="text" name="postalCode" placeholder="postal code"/>
             <button onClick={this.orderHandler}>Complete Order</button>
        </form>
        )
            
        return(
            <div className={style.ContactData} >
                <h4>Enter info</h4>             
            <p> PRICE : { this.props.price}</p>   
             <p> Enter your contact information:</p>
                {form}
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