<template>
  <button role="button" :class="getClasses" :aria-labelledby="label" :disabled="disabled"
          class="ring-white focus-visible:ring focus:outline-none">
    <icon v-if="icon" class="h-full text-white" :type="icon"/>
    <template v-else>{{ label }}</template>
  </button>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'VButton',
  components: { Icon },
  props: {
    label: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'primary',
      validator: (value) => ['custom', 'primary', 'secondary'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    getClasses() {
      const baseClasses = 'py-3 font-bold uppercase rounded-sm transition-colors select-none';
      const classes = {
        custom: `${baseClasses}`,
        primary: `${baseClasses} bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400`,
        secondary: `${baseClasses} bg-gray-600 text-gray-400 hover:bg-gray-400 hover:text-gray-100`,
        disabled: `${baseClasses} bg-gray-700 text-gray-600 border border-gray-600`,
        icon: 'overflow-hidden mx-auto w-12 h-12 rounded-full transition-colors hover:bg-gray-700',
      };
      if (this.icon) return classes.icon;
      if (this.disabled) return classes.disabled;
      return classes[this.theme];
    },
  },
};
</script>
