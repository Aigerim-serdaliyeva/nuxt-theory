export const state = () => ({
  list: []
})

export const getters = {
  list: state => state.list
}

export const mutations = {
  addList (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  toggleList(state, todo) {
    todo.done = !todo.done
  }
}
