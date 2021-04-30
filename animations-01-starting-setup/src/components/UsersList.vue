<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput">
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user);
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute; /* 중간 것이 제거되면서 화면이 순간적으로 팍 흔들리는 현상 제거를 위함. */
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move { /* 하나가 삭제되거나 삽입될 때 나머지 것들에 붙음. */
  transition: transform 0.8s ease;
}
</style>