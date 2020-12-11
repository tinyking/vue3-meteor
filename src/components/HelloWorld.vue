<template>
	<h1>{{ msg }}</h1>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus-within:bg-blue-50"
		@click="handleClick"
	>
		count is: {{ count }}
	</button>
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
		setup() {
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
