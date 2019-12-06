import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput.vue', () => {
  it ('show btn-close when input has value', () => {
    const params = {
      query: 'simona'
    }
    const wrapper = shallowMount(SearchInput)
    wrapper.setData({ params })
    expect(wrapper.find('.btn-close').isVisible()).toBe(true)
  });

  it ('hide btn-close when input has not value', () => {
    const params = {
      query: ''
    }
    const wrapper = shallowMount(SearchInput)
    wrapper.setData({ params })
    expect(wrapper.find('.btn-close').isVisible()).toBe(false)
  });

  it ('click on the btn-close erases the query', () => {
    const params = {
      query: 'simona'
    }
    const wrapper = shallowMount(SearchInput)
    wrapper.setData({ params })
    const btnClose = wrapper.find('.btn-close')
    btnClose.trigger('click')
    console.log(wrapper.vm.params)
  });

})