<template>
  <div>
    <p style="color: red">Value: {{ value }}</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  props: {
    propValue: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const value = ref(props.propValue);

    watchEffect(() => {
      value.value = props.propValue;
    });

    return {
      value
    };
  }
};
</script>
