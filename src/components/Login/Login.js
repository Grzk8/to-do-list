import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button';

class Login extends Component {
    state = {
        controls: {
            identifier : {
                config: {
                    type: 'string',
                    placeholder: 'Email or Username',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                config: {
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
        },
        logged: false
    };


    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLenght) {
            isValid = value.length >= rules.minLenght && isValid;
        }
        if(rules.maxLenght) {
            isValid = value.length <= rules.maxLenght && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    };

    getToken = (ident, pass) => {
        let data = {
            'identifier': ident,
            'password': pass
        }

        let url = 'https://recruitment.ultimate.systems/auth/local';
        
        fetch(url,{method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'}
        }).then(response => {if(response.ok) {this.setState({logged: true})}})
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.getToken(this.state.controls.identifier.value, this.state.controls.password.value, this.state.is);
        
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id:key,
                config: this.state.controls[key]
            });
        };

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                config={formElement.config.config}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />
        ));

        let redirect = null;
        if(this.state.logged === true){
            redirect = <Redirect to='/main'/>
        }
        return (
            <div className='login'>
                <h1>Login</h1>
                
                <form onSubmit={this.handleSubmitForm}>
                    {form}
                    <Button>Login</Button>
                </form>
                {redirect}
                <p>or</p>
                <a href='/to-do-list/#/create_account'>create an account</a>
            </div>
        )
    }
}

export default Login;