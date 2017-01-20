<template>
  <main id="app">
    <Welcome></Welcome>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Welcome from './components/Welcome'

export default {
  name: 'App',
  components: {
    Welcome,
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
}
</script>
