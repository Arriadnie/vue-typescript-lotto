<template>
  <div>
    <result-list></result-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ResultList from "@/components/results/ResultList.vue";

export default defineComponent({
  name: "Results",
  components: {
    ResultList,
  },
});
</script>
