import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 1
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        }
    },
    getters: {
        count(state) {
            return state.count;
        }
    }
});

export default store;
