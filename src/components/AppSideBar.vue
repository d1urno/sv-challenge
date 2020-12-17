<template>
  <aside
    class="pt-14 space-y-5 bg-gray-700 border-t border-gray-900"
  >
    <img :src="require('@/assets/logo.svg')" class="px-10 mb-10" alt="Superviz logo">

    <!-- Navigation -->
    <ul class="space-y-2 font-bold text-white uppercase">
      <li class="py-2 px-14 cursor-pointer">
        Design guide
      </li>
      <li class="py-2 px-14 text-gray-400 cursor-pointer hover:bg-gray-900">
        Buttons
      </li>
    </ul>
    <!-- End: Navigation -->
  </aside>
</template>

<script>
export default {
  name: 'AppSideBar',
};
</script>
