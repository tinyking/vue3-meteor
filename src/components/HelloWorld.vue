<template>
	<h1>{{ msg }}</h1>
	<button @click="handleClick">count is: {{ count }}</button>
	<p>
		Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script>
	import { computed } from 'vue';
	import { useStore } from 'vuex';

	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		setup() {
			const store = useStore();
			return {
				count: computed(() => store.getters.count),
				handleClick: () => {
					store.dispatch('increment');
				}
			};
		}
	};
</script>
