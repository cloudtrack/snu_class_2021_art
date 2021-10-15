import { observable, action } from 'mobx'

import uuid from 'uuid/v4'

class LoginModel {
    @observable users = []

    @action addUser(user) {
        this.users.push({
            id: uuid(),
            ...user
        })
    }

    @action removeUser(user) {
        this.users.remove(user)
    }

    getUsers() {
        return this.users
    }
};

export default LoginModel;
