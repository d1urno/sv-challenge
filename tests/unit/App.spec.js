import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('should display sidebar only after "isOpen" data is true', async () => {
    const wrapper = mount(App);

    wrapper.vm.$nextTick(() => {
      expect(wrapper.html().includes('display: none')).toBeTruthy();
    });

    wrapper.setData({ isOpen: true });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.html().includes('display: none')).toBeFalsy();
    });
  });
});
