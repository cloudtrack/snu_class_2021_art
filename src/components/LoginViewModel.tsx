class LoginViewModel {

    private store;
    constructor(loginStore) {
        this.store = loginStore
    }

    getPokemons() {
        return this.store.getPokemons()
    }

    addPokemon(pokemon) {
        this.store.addPokemon(pokemon)
    }

    removePokemon(pokemon) {
        this.store.removePokemon(pokemon)
    }
}

export default LoginViewModel
