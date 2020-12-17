<template>
  <div class="overflow-x-hidden relative h-screen">
    <transition name="slide-right">
      <app-side-bar
        v-show="isOpen"
        class="fixed inset-0 z-10 mt-20 w-72"
      />
    </transition>

    <!-- Invisible Backdrop -->
    <button
      v-if="isOpen"
      type="button"
      class="fixed inset-0 w-full cursor-default focus:outline-none"
      tabindex="-1"
      @mousedown="isOpen = false"
    />
    <!-- End: Invisible Backdrop -->

    <app-nav-bar class="sticky top-0 h-20" :is-open="isOpen" @toggle="isOpen = !isOpen"/>
    <buttons-view class="container px-6 pt-20 lg:px-44"/>
  </div>
</template>

<script>
import AppSideBar from '@/components/AppSideBar.vue';
import AppNavBar from '@/components/AppNavBar.vue';
import ButtonsView from '@/views/ButtonsView.vue';

export default {
  name: 'App',
  components: {
    AppSideBar,
    AppNavBar,
    ButtonsView,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.slide-right-enter,
.slide-right-leave-to {
  @apply transform -translate-x-full;
}

.slide-right-enter-active,
.slide-right-leave-active {
  @apply transition duration-300 ease-out;
}

/*****************************************
  Remove highlight blue color on buttons
  when tapped, only for mobile devices
*****************************************/
@layer base {
  button {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
</style>
