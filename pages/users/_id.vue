<template>
  <div>
    <h2>{{ user.name }}</h2>
    <hr>
    <b>{{ user.email }}</b>
    <br> <br>
    <nuxt-link to="/users">Users</nuxt-link>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({params, error, store}) {
    try {
      const user = await store.dispatch('users/fetchUsersById', params.id)
      return {user}
    }
    catch(e) {
      error(e)
    }
   }
}
</script>
