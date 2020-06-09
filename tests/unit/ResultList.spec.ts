import { shallowMount } from '@vue/test-utils';

import ResultList from '@/components/ResultList/ResultList.vue';

describe('ResultList.vue', () => {
  const wrapper = shallowMount(ResultList, {
    propsData: {
      number: '5',
      text: 'foo'
    }
  });

  console.log(wrapper.html());

  it('ResultList exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a table', () => {
    expect(wrapper.find('p')).toBe(true);
  });

  it('has a table', () => {
    expect(wrapper.html());
  });

  it('has a table', () => {
    const text = wrapper.findAll('.text-start');
    expect(text.exists()).toBe(true);
  });
});
