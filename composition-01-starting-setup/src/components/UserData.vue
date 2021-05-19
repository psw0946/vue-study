<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  name: 'UserData',
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    console.log(context);
    // context.emit('save-data', 1); 사용 가능
    // this.$emit('save-data', 1); 사용 불가

    return {
      userName: uName,
      age,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },

};
</script>

<style scoped>

</style>
