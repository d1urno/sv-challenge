import { shallowMount } from '@vue/test-utils';
import VButton from '@/components/VButton.vue';

describe('VButton.vue', () => {
  it('should be disabled when disabled prop is passed', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        label: 'Test',
        disabled: true,
      },
    });
    expect(wrapper.find('button')
      .attributes().disabled)
      .toBe('disabled');
  });
  it('should have bg-yellow-300 class when theme prop "primary" is passed', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        label: 'Test',
        theme: 'primary',
      },
    });
    expect(wrapper.find('button')
      .attributes()
      .class
      .split(' '))
      .toContain('bg-yellow-300');
  });
  it('should have bg-gray-600 class when theme prop "secondary" is passed', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        label: 'Test',
        theme: 'secondary',
      },
    });
    expect(wrapper.find('button')
      .attributes()
      .class
      .split(' '))
      .toContain('bg-gray-600');
  });
  it('should contain an icon component when icon prop is passed', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        label: 'Test',
        icon: 'camera',
      },
    });
    expect(wrapper.find('[data-test-id="icon"]').vm).toBeDefined();
  });
});
