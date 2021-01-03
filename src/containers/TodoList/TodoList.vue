<template>
  <div class="hello">
    <Header @add="addUndoItem" />
    <UndoList :list="undoList" @delete="handlerUndoItemDelete"></UndoList>
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data() {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push(inputValue)
    },
    handlerUndoItemDelete(index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="stylus"></style>
