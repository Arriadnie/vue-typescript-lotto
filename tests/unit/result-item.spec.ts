import { shallowMount } from "@vue/test-utils";
import ResultItem from "@/components/results/ResultItem.vue";

describe("ResultItem.vue", () => {
  it("renders result when passed data", () => {
    const result = {
      numbers: ["26", "36", "52", "58", "60"],
      additionalNumbers: ["1"],
      jackpot: "1000",
    };

    const wrapper = shallowMount(ResultItem, {
      props: { result },
    });

    expect(wrapper.props().result).toMatchObject(result);

    const numbersArray = wrapper.findAll(".number-item.general span");
    numbersArray.forEach((number, index) => {
      expect(number.html()).toBe(`<span>${result.numbers[index]}</span>`);
    });
  });
});
