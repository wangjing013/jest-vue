import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import { findTestWarpper } from '@/utils/testUtils'

describe('UndoList 组件', () => {
  it('list 参数为 [] 时, 对应 count 应该为 0, 列表无内容', () => {
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

  it('list 参数为 [1,2,3] 时, 对应 count 应该为 3, 列表有内容,且存在删除按钮', () => {
    const warpper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            value: 1,
            status: 'div'
          },
          {
            value: 2,
            status: 'div'
          },
          {
            value: 3,
            status: 'div'
          }
        ]
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

  it('当点击删除按钮时, 对外发送删除事件', () => {
    const warpper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            value: 1,
            status: 'div'
          },
          {
            value: 2,
            status: 'div'
          },
          {
            value: 3,
            status: 'div'
          }
        ]
      }
    })
    const deleteButton = findTestWarpper(warpper, 'delete-button').at(1)
    deleteButton.trigger('click')
    // 对外触发事件
    expect(warpper.emitted().delete).toBeTruthy()
    // 事件参数
    expect(warpper.emitted().delete[0][0]).toBe(1)
  })

  it('当列表项被点击时, 向往触发 status', () => {
    const warpper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            value: 1,
            status: 'div'
          },
          {
            value: 2,
            status: 'div'
          },
          {
            value: 3,
            status: 'div'
          }
        ]
      }
    })
    const item = findTestWarpper(warpper, 'item').at(1)
    item.trigger('click')
    expect(warpper.emitted().status).toBeTruthy()
    expect(warpper.emitted().status[0][0]).toBe(1)
  })

  it('列表展示一个input, 其它列表正常', () => {
    const warpper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            value: 1,
            status: 'div'
          },
          {
            value: 2,
            status: 'input'
          },
          {
            value: 3,
            status: 'div'
          }
        ]
      }
    })
    const item = findTestWarpper(warpper, 'input')
    // 元素值
    expect(item.at(0).element.value).toBe('2')
    expect(item.length).toBe(1)
  })

  it('列表展示input失去焦点时, 向外触发 reset 事件', () => {
    const warpper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            value: 1,
            status: 'div'
          },
          {
            value: 2,
            status: 'input'
          },
          {
            value: 3,
            status: 'div'
          }
        ]
      }
    })
    const item = findTestWarpper(warpper, 'input').at(0)
    // 元素值
    item.trigger('blur')
    expect(warpper.emitted().reset).toBeTruthy()
  })

  it('当 input 框值修改, 向外触发 change 事件', () => {
    const warpper = shallowMount(UndoList, {
      propsData: {
        list: [
          {
            value: 1,
            status: 'div'
          },
          {
            value: 2,
            status: 'input'
          },
          {
            value: 3,
            status: 'div'
          }
        ]
      }
    })
    const item = findTestWarpper(warpper, 'input').at(0)
    // 元素值
    item.trigger('change')
    expect(warpper.emitted().change).toBeTruthy()
  })
})
