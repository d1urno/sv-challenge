<template>
  <i
    class="inline-flex justify-center items-center"
    role="presentation"
    :aria-labelledby="type"
  >
    <component :is="getComponent"/>
  </i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    getComponent() {
      // https://github.com/babel/babel-eslint/issues/681#issuecomment-652141552
      return () => import('@/assets/icons/' + this.type + '.vue'); // eslint-disable-line
    },
  },
};
</script>
