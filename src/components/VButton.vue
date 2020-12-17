<template>
  <button role="button" :class="getClasses" :aria-labelledby="label" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'VButton',
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
  },
  computed: {
    getClasses() {
      const baseClasses = 'py-3 font-bold uppercase rounded-sm transition-colors select-none';
      const classes = {
        custom: `${baseClasses}`,
        primary: `${baseClasses} bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-400`,
        secondary: `${baseClasses} bg-gray-600 text-gray-400 hover:bg-gray-400 hover:text-white`,
        disabled: `${baseClasses} bg-gray-700 text-gray-600 border-2 border-gray-600`,
      };
      return classes[this.disabled ? 'disabled' : this.theme];
    },
  },
};
</script>
