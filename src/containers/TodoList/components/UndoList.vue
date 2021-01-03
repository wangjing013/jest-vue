<template>
  <div class="undo-list-container">
    <div>
      代办列表: <span data-test="count">{{ count }}</span>
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

<style></style>
