// import Vue from 'vue'
import { createStore } from 'vuex';
import 'es6-promise/auto';


// Vue.use(Vuex)

// const state = {
//     user: null
// };

export const store = createStore({
    state: {
        user: null
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        }
    },
    mutations: {
        user(state, user) {
            state.user=user;
        }
    }
})