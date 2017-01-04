<template>
  <main id="app">
    <h1>VueJS 2 Boilerplate</h1>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
}
</script>
