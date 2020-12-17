<template>
  <i
    class="inline-flex justify-center items-center"
    role="presentation"
    :aria-labelledby="type"
  >
    <component :is="type"/>
  </i>
</template>

<script>
export default {
  name: 'Icon',
  components: { camera: () => import('@/assets/icons/camera.vue') },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
