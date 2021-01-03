import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'
let warpper = null
beforeAll(() => {
  warpper = shallowMount(TodoList)
})

it('TodoList 代办事项默认为空', () => {
  const undoList = warpper.vm.$data.undoList
  expect(undoList).toEqual([])
})
it('TodoList 中 addUndoItem 被调用时, undoList 列表会增加一项', () => {
  warpper.setData({
    undoList: [1, 2, 3]
  })
  warpper.vm.addUndoItem(4)
  expect(warpper.vm.undoList).toEqual([1, 2, 3, 4])
})

it('TodoList 使用 undoList 组件时, 需要传入 list 参数', () => {
  const undoList = warpper.findComponent(UndoList)
  expect(undoList.props).toBeTruthy()
})

it('TodoList 中 handlerUndoItemDelete 被调用时, undoList 列表会减一项', () => {
  warpper.setData({
    undoList: [1, 2, 3]
  })
  warpper.vm.handlerUndoItemDelete(1)
  expect(warpper.vm.undoList).toEqual([1, 3])
})
