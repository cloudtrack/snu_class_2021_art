import React from 'react'
import {inject} from 'mobx-react'
import RootStore from '../models/RootStore';
import { construct } from 'ionicons/icons';

@inject(RootStore.type.LOGIN_MODEL)
class LoginProvider extends React.Component {

    private viewModel;

    constructor(props) {
        super(props);
        const loginModel = props[RootStore.type.LOGIN_MODEL]
        this.viewModel = new LoginViewModel(loginModel)
    }

    render() {
        return (
            <LoginController viewModel={this.viewModel}/>
        )
    }
}

export default LoginProvider;
