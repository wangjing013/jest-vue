<template>
  <div class="hello">
    <Header @add="addUndoItem" />
    <div>
      代办列表: <span>{{ undoCount }}</span>
    </div>
    <ul class="completed-list" data="test-completed-list">
      <li v-for="(item, index) of undoList" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data() {
    return {
      undoList: []
    }
  },
  computed: {
    undoCount() {
      return this.undoList.length
    }
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push(inputValue)
    }
  }
}
</script>

<style scoped lang="stylus"></style>
