import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'
let warpper = null
beforeAll(() => {
  warpper = shallowMount(TodoList)
})

describe('TodoList 组件', () => {
  it('undoList 数组默认为空', () => {
    const undoList = warpper.vm.$data.undoList
    expect(undoList).toEqual([])
  })
  it('addUndoItem 被调用时, undoList 列表会增加', () => {
    warpper.setData({
      undoList: [
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
    })
    warpper.vm.addUndoItem(4)
    expect(warpper.vm.undoList).toEqual([
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
      },
      {
        value: 4,
        status: 'div'
      }
    ])
  })

  it('使用 undoList 组件时, 需要传入 list props', () => {
    const undoList = warpper.findComponent(UndoList)
    expect(undoList.props).toBeTruthy()
  })

  it('当 handlerUndoItemDelete 被调用时, undoList 列表会减少', () => {
    warpper.setData({
      undoList: [
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
    })
    warpper.vm.handlerUndoItemDelete(1)
    expect(warpper.vm.undoList).toEqual([
      {
        value: 1,
        status: 'div'
      },
      {
        value: 3,
        status: 'div'
      }
    ])
  })

  it('当 changeStatus 被调用时, 状态会发生变化', () => {
    warpper.setData({
      undoList: [
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
    })
    warpper.vm.changeStatus(1)
    expect(warpper.vm.undoList).toEqual([
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
    ])
  })

  it('当 resetStatus 被调用时, 状态会发生变化', () => {
    warpper.setData({
      undoList: [
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
    })
    warpper.vm.resetStatus()
    expect(warpper.vm.undoList).toEqual([
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
    ])
  })

  it('当 itemChange 被调用时, 列表项内容被修改', () => {
    warpper.setData({
      undoList: [
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
    })
    warpper.vm.itemChange({
      index: 1,
      value: '测试修改'
    })
    expect(warpper.vm.undoList).toEqual([
      {
        value: 1,
        status: 'div'
      },
      {
        value: '测试修改',
        status: 'div'
      },
      {
        value: 3,
        status: 'div'
      }
    ])
  })
})
