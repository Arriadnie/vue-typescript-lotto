<template>
  <div class="home-hero container-main">
    <div class="content">
      <h1 class="title">Take the chance to change your life</h1>
      <p class="subtitle">
        Bingo is online lottery platform inspired by few sorteo lover's fantasy
        of the ultimate lottery platfrom.
      </p>

      <router-link class="main-btn" to="/results">Get results</router-link>
    </div>
    <div class="image">
      <img src="../assets/hero.png" alt="Hero banner" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="sass">
@import "src/assets/sass/components/hero"
</style>
