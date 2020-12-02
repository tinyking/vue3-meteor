<template>
	<h1>{{ msg }}</h1>
	<button @click="handleClick">count is: {{ count }}</button>
	<p>
		Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script lang="ts">
	import { computed, defineComponent } from 'vue';
	import { useStore } from 'vuex';

	export default defineComponent({
		name: 'HelloWorld',
		props: {
			msg: String
		},
		setup(props) {
			const store = useStore();

			return {
				count: computed(() => store.getters.count),
				handleClick: () => {
					store.dispatch('increment');
				}
			};
		}
	});
</script>
