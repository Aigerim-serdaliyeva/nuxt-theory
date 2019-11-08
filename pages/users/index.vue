<template>
  <section class="container">
    <ul>
      <li v-for="user in 5" :key="user">
        <a href="#" @click.prevent="goTo(user)">User {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user)
    }
  }
}
</script>
