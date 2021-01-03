import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue'

let warpper = null
beforeAll(() => {
  warpper = shallowMount(TodoList)
})

it('TodoList 代办事项默认为空', () => {
  const undoList = warpper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('默认情况下,完成列表数量统计', () => {
  const undoCount = warpper.vm.undoCount
  expect(undoCount).toBe(0)
})

it('TodoList 监听到 Header 组件触发 add 事件时, 列表相应新增', () => {
  const content = 'add Item'
  // 注意点: header 记得通过 findComponent 方式去查找, 而不是通过 shallowMount(Header) . 这里排查了半天才定位到
  const header = warpper.findComponent(Header)
  header.vm.$emit('add', content)
  expect(header.emitted().add).toBeTruthy()
  const undoList = warpper.vm.$data.undoList
  expect(undoList).toEqual([content])
})
