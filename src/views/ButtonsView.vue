<template>
  <main>
    <h1 class="mb-5 text-5xl font-light text-white">Buttons</h1>
    <p class="mb-10 text-gray-400">Button texts must be on UPPERCASE</p>

    <!-- Main buttons section -->
    <p class="mb-2 font-bold text-white uppercase">Main buttons</p>
    <hr class="mb-10 text-gray-400">
    <div class="grid grid-cols-4 gap-x-2 gap-y-6 mb-20 max-w-3xl uppercase sm:gap-9">

      <p class="font-bold text-white">Dark Mode</p>
      <p class="font-bold text-center text-gray-400">Main</p>
      <p class="font-bold text-center text-gray-400">Hover</p>
      <p class="font-bold text-center text-gray-400">Click</p>

      <p class="my-auto font-bold text-gray-400">Primary action</p>
      <v-button label="Label"/>
      <v-button label="Label"/>
      <v-button label="Label"/>

      <p class="my-auto font-bold text-gray-400">Secondary action</p>
      <v-button label="Secondary"/>
      <v-button label="Secondary"/>
      <v-button label="Secondary"/>

      <p class="my-auto font-bold text-gray-400">Disabled</p>
      <v-button label="Disabled"/>
      <v-button label="Disabled"/>
      <v-button label="Disabled"/>

    </div>
    <!-- End: Main buttons section -->

    <!-- Icon buttons section -->
    <p class="mb-2 font-bold text-white uppercase">Icon buttons</p>
    <hr class="mb-6 text-gray-400">

    <div class="flex mb-28 space-x-10">
      <p class="pb-3 mt-auto mb-1 font-bold text-gray-400 uppercase">Secondary icon</p>
      <div>
        <div class="flex space-x-5">
          <div>
            <p class="mb-8 font-bold text-center text-gray-500">On</p>
            <button class="overflow-hidden mx-auto w-12 h-12 rounded-full">
              <icon type="camera" class="h-full text-white"/>
            </button>
          </div>
          <div>
            <p class="mb-8 font-bold text-center text-gray-500">Hover</p>
            <button class="overflow-hidden mx-auto w-12 h-12 bg-gray-700 rounded-full">
              <icon type="camera" class="h-full text-white"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Icon buttons section -->
  </main>
</template>

<script>
import VButton from '@/components/VButton.vue';
import Icon from '@/components/Icon.vue';

export default {
  name: 'ButtonsView',
  components: {
    Icon,
    VButton,
  },
};
</script>
