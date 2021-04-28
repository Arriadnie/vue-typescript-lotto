<template>
  <div class="container-main result">
    <div class="result-header">
      <h1 class="title">Eurojackpot results</h1>

      <div class="result-form">
        <label>
          <span class="placeholder">Choose the date for results:</span>
          <datepicker v-model="date" inputFormat="MM dd yyyy" />
        </label>
      </div>
    </div>

    <div v-if="loading">
      <p>Results is loading...</p>
    </div>

    <div v-else-if="error">
      <p>Request has failed!</p>
    </div>

    <div class="result-wrap" v-else-if="res.length">
      <p class="subtitle">Results for {{ dateFormatted }}</p>
      <div class="result-list">
        <result-item
          v-for="(result, index) in res"
          :key="index"
          v-bind="{ result }"
        />
      </div>
    </div>

    <div v-else>
      <p>No results for selected date</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { DRAW } from "@/graphql/lottery";
import Datepicker from "vue3-datepicker";
import ResultItem from "@/components/results/ResultItem.vue";

export default defineComponent({
  name: "ResultList",
  components: {
    Datepicker,
    ResultItem,
  },
  setup() {
    // Set default value
    const date = ref(new Date("Jan 18 2018"));
    const limit = ref(10);
    const type = ref("cash4life");

    const removeDayFromDate = (array: Array<string>): Array<string> => {
      array.shift();
      return array;
    };

    const dateFormatted = computed(() =>
      removeDayFromDate(date.value.toDateString().split(" ")).join(" ")
    );

    const { result, variables, loading, error } = useQuery(DRAW, {
      date: dateFormatted,
      limit,
      type,
    });

    const res = useResult(result, [], (data) => data.draw.draws);

    // use watcher for date as far as datepicker haven't change/input event
    // for each change of date useQuery would make new query with changed variables
    watch(date, () => {
      variables.value.date = dateFormatted;
    });

    return {
      loading,
      error,
      res,

      date,
      dateFormatted,
      limit,
      type,
    };
  },
});
</script>

<style lang="sass">
@import "../../assets/sass/components/results"
@import "../../assets/sass/components/custom-datepicker"
</style>
