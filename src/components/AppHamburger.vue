<template>
  <!-- Hamburger -->
  <button
    id="hamburger"
    class="px-6 py-4 -mr-1 -ml-4 hamburger hamburger--slider"
    type="button"
    aria-label="Menu"
    aria-controls="navigation"
    :class="{ 'is-active': isActive }"
    @click="$emit('toggle')"
  >
    <span id="hamburger-box" class="hamburger-box">
      <span id="hamburger-inner" class="hamburger-inner" />
    </span>
  </button>
  <!-- End: Hamburger -->
</template>

<script>
export default {
  name: 'AppHamburger',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.hamburger-box {
  width: 20px;
  height: 16px;
  display: block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 20px;
  height: 2px;
  background-color: white;
  border-radius: 4px;
  position: absolute;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
}

.hamburger-inner::before {
  top: -5px;
}

.hamburger-inner::after {
  bottom: -5px;
}

.hamburger--slider .hamburger-inner {
  top: 2px;
}

.hamburger--slider .hamburger-inner::before {
  top: 6px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}

.hamburger--slider .hamburger-inner::after {
  top: 12px;
}

.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 6px, 0) rotate(45deg);
}

.hamburger--slider.is-active .hamburger-inner::before {
  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
  opacity: 0;
}

.hamburger--slider.is-active .hamburger-inner::after {
  transform: translate3d(0, -12px, 0) rotate(-90deg);
}
</style>
