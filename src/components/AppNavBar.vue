<template>
  <div
    class="flex items-center px-6 bg-gray-700"
  >
    <app-hamburger :is-active="isOpen" @toggle="$emit('toggle')"/>
  </div>
</template>

<script>
import AppHamburger from '@/components/AppHamburger.vue';

export default {
  name: 'AppNavBar',
  components: { AppHamburger },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
