import LoginModel from "./domain/LoginModel";

class RootStore {
    static type = {
        LOGIN_MODEL: 'loginModel'
    }

    private loginModel;

    constructor() {
        this.loginModel = new LoginModel()
    }

    getStores = () => ({
        [RootStore.type.LOGIN_MODEL]: this.loginModel
    })
}

export default RootStore;
