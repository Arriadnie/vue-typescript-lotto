<template>
  <div class="result-card">
    <div class="result-card-headline">
      <p>Winning numbers</p>
      <p class="tablet">Jackpot</p>
    </div>

    <div class="result-card-content">
      <div class="number-list">
        <div
          class="number-item general"
          v-for="(number, index) in result.numbers"
          :key="index"
        >
          <span>{{ number }}</span>
        </div>
        <div
          class="number-item additional"
          v-for="(additionalNumber, index) in result.additionalNumbers"
          :key="index"
        >
          <span>{{ additionalNumber }}</span>
        </div>
      </div>
      <p class="jackpot">$ {{ result.jackpot }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultItem",
  props: {
    result: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
