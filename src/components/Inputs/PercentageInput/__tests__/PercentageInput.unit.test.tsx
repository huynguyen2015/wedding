import { mount, shallow } from 'enzyme'
import PercentageInput from '../index'

describe('Test for Percentage Input Component', function () {
  let wrapper

  beforeEach(function () {
    wrapper = document.createElement('div')
    document.body.appendChild(wrapper)
  })

  afterEach(function () {
    wrapper = null
  })

  it('Test output with scientific notation 1e-8 === 0.00000001', async () => {
    wrapper = mount(<PercentageInput value="1e-8" />)
    const input = wrapper.find('input')
    expect(input.length).toBe(1)
    expect(input.props().value).toBe('0.00000001')
  })

  it('Test Percentage was formatted', async () => {
    wrapper = mount(<PercentageInput value="100000" />)
    const input = wrapper.find('input')
    expect(input.length).toBe(1)
    expect(input.props().value).toBe('100,000')
  })

  it('Test Percentage negative was formatted', async () => {
    wrapper = mount(<PercentageInput value="-100000" />)
    const input = wrapper.find('input')
    expect(input.length).toBe(1)
    expect(input.props().value).toBe('-100,000')
  })

  it('Test input change value and emmit to parent', async () => {
    let value = '1e-8'
    wrapper = shallow(
      <PercentageInput value={value} onChange={(e) => (value = e)} />
    )
      .dive()
      .dive()
      .dive()
    const input = wrapper.find('input')
    input.simulate('onChange', { currentTarget: { value: '1' } })
    input.simulate('blur', { currentTarget: { value: '1' } })
    expect(value).toBe('1')
  })
})
