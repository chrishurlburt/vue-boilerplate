<template>
  <Section class="welcome">
    <div class="layout-wrap">
      <div class="layout-row">
        <div class="intro">
          <h1 class="welcome-title">Vue.JS Boilerplate</h1>
          <a href="https://github.com/chrishurlburt/vue-boilerplate/blob/develop/README.md" target="blank" class="documentation">Documentation</a>
        </div>
      </div>
    </div>
  </Section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
}
</script>

<style lang="scss">

  h1 {
    color: red;
  }

</style>
