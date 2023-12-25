<template>
  <div>
    <button @click="updateValue">Update Value</button>
    <Children :propValue="value" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Children from "./components/Children.vue";

export default {
  components: {
    Children,
  },
  setup() {
    const value = ref('Initial Value');

    function updateValue() {
      value.value = 'Updated Value';
    }

    return {
      value,
      updateValue
    };
  }
};
</script>
