import Icon from '@/components/Icon.vue';

describe('Icon.vue', () => {
  it('should load the correspondent svg vue component when "type" prop is passed', async () => {
    const localThis = { type: 'camera' };
    expect(await Icon.computed.getComponent.call(localThis)()).toBeDefined();
  });
});
