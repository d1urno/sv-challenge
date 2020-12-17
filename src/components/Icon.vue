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
  components: {},
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>
