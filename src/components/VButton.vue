<template>
  <button class="py-3 font-bold uppercase bg-yellow-400 rounded-sm"
          role="button"
          :aria-labelledby="label">
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
  },
};
</script>
