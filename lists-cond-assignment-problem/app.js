const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      show: true,
    };
  },
  computed: {
    isShowOrHide() {
      return this.show ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      if (this.enteredTask === '') {
        return;
      }
      this.tasks.push(this.enteredTask);
    },
    toggleList() {
      this.show = !this.show;
    },
  }
});

app.mount('#assignment');