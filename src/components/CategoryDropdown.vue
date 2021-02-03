<template>
  <div>
    <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-center relative z-10 border border-gray-500 bg-gray-200 h-8 w-16 focus:outline-none hover:bg-gray-300 border-r-0 rounded-l-lg border-t-4 border-b-4 border-l-4"
    >
      <span class="px-1">All</span>
      <i class="material-icons">arrow_drop_down</i>
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black opacity-50 cursor-default h-full w-full"
    ></button>
    <!-- top-0 left-0 right-0 bottom-0 can be written as inset-0 inset-x-0 also for left right inset-y-0 top/bottom -->
  </div>
  <div
    v-if="isOpen"
    class="rounded-lg py-2 bg-gray-100 w-38 mt-1 shadow-xl absolute"
  >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category One</router-link
    >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category Two</router-link
    >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category Three</router-link
    >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category Four</router-link
    >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category Five</router-link
    >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category Six</router-link
    >
    <router-link
      to="/collection"
      class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
    >
      Category Seven</router-link
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryDropdown",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>