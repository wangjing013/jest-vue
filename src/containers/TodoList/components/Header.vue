<template>
  <div class="header">
    <div class="content">
      TodoList
      <input
        class="input"
        data-test="input"
        v-model="inputValue"
        @keyup.enter="handlerEnter"
        placeholder="请输入代办事项"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handlerEnter() {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.header {
  background-color #333
  height 60px
  color #fff
}
.content {
  width 600px
  margin: 0 auto
  line-height 60px
}
.input {
  outline none
  border none
  height 32px;
  line-height 32px;
  width 400px
  padding 6px 12px;
  float right
  margin-top 14px
}
</style>
