<template>
  <section class="container">
    <h2>{{ pageTitle }}</h2>
    <ul>
      <li @click="goTo(user)" v-for="user in users" :key="user.id">
        <a href="#">{{user.name}} ({{user.email}})</a>
      </li>
    </ul>
  </section>
</template>

<script>
import { resolve } from 'q'
export default {
  middleware: ['auth'],
  // async fetch({ store, error }) {
  //   try {
  //     if (store.getters['users/users'].length === 0) {
  //       await store.dispatch('users/fetchUsers')
  //     }
  //   }
  //   catch(err) {
  //     error(err)
  //   }
  // },
  data() {
    return {
      pageTitle: "Users page"
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style >
  li {
    cursor: pointer;
  }
</style>
