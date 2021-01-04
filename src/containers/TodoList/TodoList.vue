<template>
  <div class="hello">
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handlerUndoItemDelete"
      @status="changeStatus"
      @reset="resetStatus"
      @change="itemChange"
    ></UndoList>
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
      this.undoList.push({
        value: inputValue,
        status: 'div'
      })
    },
    handlerUndoItemDelete(index) {
      this.undoList.splice(index, 1)
    },
    changeStatus(index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (index === itemIndex) {
          item.status = 'input'
        } else {
          item.status = 'div'
        }
        newList.push(item)
      })
      this.undoList = newList
    },
    resetStatus() {
      const newList = []
      this.undoList.forEach((item) => {
        item.status = 'div'
        newList.push(item)
      })
      this.undoList = newList
    },
    itemChange({ index, value }) {
      const item = this.undoList.find((item, itemIndex) => itemIndex === index)
      item.value = value
    }
  }
}
</script>

<style scoped lang="stylus"></style>
