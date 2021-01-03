import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWarpper } from '@/utils/testUtils'

let warpper = null
beforeAll(() => {
  warpper = shallowMount(Header)
})

describe('Header 组件', () => {
  it('样式发生变化时,有提示', () => {
    expect(warpper).toMatchSnapshot('')
  })

  it('header 包含input框', () => {
    const input = findTestWarpper(warpper, 'input')
    expect(input.exists()).toBe(true)
  })

  it('input 框初始值应该为空', () => {
    expect(warpper.vm.$data.inputValue).toBe('')
  })

  it('当 input 值发生改变时, data 中值也发生改变', async() => {
    const input = findTestWarpper(warpper, 'input')
    const value = 'some value'
    await input.setValue(value)
    expect(warpper.vm.$data.inputValue).toBe(value)
  })

  it('当 input 内容为空时,回车时不对外发送事件', async() => {
    const input = findTestWarpper(warpper, 'input')
    await input.setValue('')
    input.trigger('keyup.enter')
    expect(warpper.emitted().add).toBeFalsy()
  })

  it('当 input 内容不为空时,回车对外外发送事件', async() => {
    const input = findTestWarpper(warpper, 'input')
    await input.setValue('some value')
    input.trigger('keyup.enter')
    expect(warpper.emitted().add).toBeTruthy()
  })

  it('当 input 内容不为空时,回车时清空内容', async() => {
    const input = findTestWarpper(warpper, 'input')
    await input.setValue('some value')
    await input.trigger('keyup.enter')
    expect(warpper.vm.$data.inputValue).toBe('')
  })
})
