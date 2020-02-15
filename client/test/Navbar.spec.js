import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navbar, { store })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
