<template>
  <div class="nav container-main">
    <router-link class="logo" to="/">
      <span>Bingo</span>
      <span class="icon">
        <img alt="logo" src="../assets/logo.svg" />
      </span>
    </router-link>

    <div class="nav-list">
      <router-link class="nav-list-item" to="/">Home</router-link>
      <router-link class="nav-list-item" to="/results">Get results</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
});
</script>

<style lang="sass">
@import "src/assets/sass/components/navigation"
</style>
