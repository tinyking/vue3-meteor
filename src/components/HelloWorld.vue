<template>
  <h1>{{ msg }}</h1>
  <button @click="handleClick">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      // count: 0
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    handleClick() {
      this.$store.dispatch('increment')
    }
  }
}
</script>
