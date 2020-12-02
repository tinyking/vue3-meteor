import { createStore } from 'vuex';

interface RootState {
	count: number;
}

const store = createStore<RootState>({
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
		count(state): number {
			return state.count;
		}
	}
});

export default store;
