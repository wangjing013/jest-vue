import TodoList from '@/containers/TodoList/TodoList'
import Header from '@/containers/TodoList/components/Header'
import { findTestWarpper } from '@/utils/testUtils'
import { mount } from '@vue/test-utils'
import store from '@/store'
it(`
  描述用户行为
  1. 在 header 中输入内容
  2. 按下回车键
  3. 内容新增成功 页面上能查看到对应元素
`, async() => {
  const warpper = mount(TodoList, {
    store: store
  })
  const header = warpper.findComponent(Header)
  const inputEle = header.find('input')
  const content = 'Wang Jing'
  // 事件是异步机制, 注意用 await 不然测试流程会一直往下走并不会等待事件完成
  await inputEle.setValue(content)
  await inputEle.trigger('change')
  await inputEle.trigger('keyup.enter')

  const items = findTestWarpper(warpper, 'item')
  expect(items.length).toBe(1)
  expect(items.at(0).text()).toContain(content)
})
