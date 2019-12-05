<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
</template>


<script>
export default {
  layout: "empty",
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  section {
    width: 500px;
    margin: 0 auto;
  }
  form {
    margin-bottom: 30px;
  }
</style>
