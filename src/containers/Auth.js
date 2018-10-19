import React, {Component } from 'react';

class Auth extends Component  {
    state =  {
        controls:{
             email: {
                 elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e.mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }, 
                valid: false,
                touched: false
             },
             password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 7
                }, 
                valid: false,
                touched: false
             }
        }
    }
    render () {
        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}