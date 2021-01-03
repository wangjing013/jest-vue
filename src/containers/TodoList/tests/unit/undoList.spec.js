import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import { findTestWarpper } from '@/utils/testUtils'

it('UndoList 参数为 [] 时, 对应 count 应该为 0, 列表无内容', () => {
  const warpper = shallowMount(UndoList, {
    propsData: {
      list: []
    }
  })
  expect(warpper.vm.list).toEqual([])
  // expect(warpper.vm.count).toBe(0) // 写法一
  const count = findTestWarpper(warpper, 'count')
  const items = findTestWarpper(warpper, 'item')
  expect(count.at(0).text()).toBe('0') // 写法二
  expect(items.length).toBe(0)
})

it('UndoList 参数为 [1,2,3] 时, 对应 count 应该为 3, 列表有内容,且存在删除按钮', () => {
  const warpper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  // expect(warpper.vm.count).toBe(0) // 写法一
  const count = findTestWarpper(warpper, 'count')
  const items = findTestWarpper(warpper, 'item')
  const deleteButtons = findTestWarpper(warpper, 'delete-button')
  expect(count.at(0).text()).toBe('3') // 写法二
  expect(items.length).toBe(3)
  expect(deleteButtons.length).toBe(3)
})

it('UndoList 当点击删除按钮时对外触发删除事件', () => {
  const warpper = shallowMount(UndoList, {
    propsData: {
      list: [1, 2, 3]
    }
  })
  const deleteButton = findTestWarpper(warpper, 'delete-button').at(1)
  deleteButton.trigger('click')
  // 对外触发事件
  expect(warpper.emitted().delete).toBeTruthy()
  // 事件参数
  expect(warpper.emitted().delete[0][0]).toBe(1)
})
