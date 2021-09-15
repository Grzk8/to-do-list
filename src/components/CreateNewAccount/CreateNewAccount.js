import React, {Component} from 'react';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button';

class CreateNewAccount extends Component {
    state = {
        controls: {
            username : {
                config: {
                    type: 'string',
                    placeholder: 'Username',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email : {
                config: {
                    type: 'email',
                    placeholder: 'Email',
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
            passwordRepeat: {
                config: {
                    type: 'password',
                    placeholder: 'Repeat password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    confirmed: true
                },
                valid: false,
                touched: false
            },
        },
    }


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
        if(rules.confirmed) {
            isValid = value === this.state.controls.password.value;
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

    getToken = (user, mail, pass) => {
        let data = {
            'username': user,
            'email': mail,
            'password': pass
        }


        console.log(data)

        let url = 'https://recruitment.ultimate.systems/auth/local/register';

        fetch(url,{method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'}
        }).then(response => console.log(response))
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.getToken(this.state.controls.username.value, this.state.controls.email.value, this.state.controls.passwordRepeat.value)
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
        ))
        
        return (
            <div className='createAccount'>
                <a className="goBack" href="/"></a>
                <h1>Create an new account</h1>
                <form onSubmit={this.handleSubmitForm}>
                    {form}
                    <Button>Create</Button>
                </form>
            </div>
        )
    }
}

export default CreateNewAccount;