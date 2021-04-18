const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
