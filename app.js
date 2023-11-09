import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const amount = ref("");
    const yenAmount = ref("");

    const convertToDollars = computed(() => {
      const convertToDollarRate = 1.07;
      return (amount.value * convertToDollarRate).toFixed(2); // TODO: Apartado 1. Modifica este return para realizar la conversión de euros a dolares
    });
    const convertToYen = computed(() => {
      const convertToYenRate = 0.0062;
      return (yenAmount.value * convertToYenRate).toFixed(2);
       // TODO: Apartado 1. Modifica este return para realizar la conversión de euros a dolares
    });

    return {
      amount,
      yenAmount,
      convertToDollars,
      convertToYen
    };
  },
}).mount("#app");
