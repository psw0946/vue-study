const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Jordan';
    },
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
