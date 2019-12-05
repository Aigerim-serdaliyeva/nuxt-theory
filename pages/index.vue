<template>
  <section class="bg-blue-500">
    <h1>This is Home page</h1>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="What needs to be done? " @keyup.enter="addTodo"></li>
    </ul>
  </section>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  components: {

  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/addList', e.target.value)
      e.target.value = ""
    },
    ...mapMutations({
      toggle: "todos/toggleList"
    })
  }
}
</script>

<style>

</style>
