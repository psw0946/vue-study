const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: true,
      friends: [
        { 
          id: 'manual', 
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        { 
          id: 'julie', 
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
});

app.mount('#app');