<template>
  <div class="undo-list-container">
    <div class="title">
      <label>代办列表:</label> <span data-test="count">{{ count }}</span>
    </div>
    <ul class="undo-list">
      <li data-test="item" v-for="(item, index) of list" :key="index">
        {{ item }}
        <span
          data-test="delete-button"
          @click="
            () => {
              handerDelete(index)
            }
          "
          class="delete-icon"
          >-</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    count() {
      return this.list.length
    }
  },
  methods: {
    handerDelete(index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped lang="stylus">
.undo-list-container {
  width 600px
  margin: 0 auto;
}
.title {
  padding: 10px 0;
  label {
    font-size 24px
  }
  span {
    float right
    width 20px
    height 20px
    line-height 20px
    text-align center
    font-size 12px
    border-radius 10px
    background-color #e6e6e6
  }
}
.undo-list {
  list-style-type none
  li {
    height: 32px;
    line-height: 32px;
    background: #fff;
    padding: 0 10px;
    border-radius: 3px;
    border-left 5px solid #629A9c
    margin-bottom: 10px;
    .delete-icon {
      float right
      cursor pointer
    }
  }
}
</style>
