<template>
  <header class="bg-white h-18">
    <div class="flex justify-between items-center mx-4">
      <div>
        <router-link to="/">
          <h1 class="text-green-300 py-4 uppercase text-5xl font-semibold">Auction</h1>
        </router-link>
      </div>

      <div class="relative flex items-center justify-center flex-grow">
        <div class="z-10">
          <!-- <CategoryDropdown /> -->
          <div>
            <div class="relative">
              <button
                @click="isOpen = !isOpen"
                class="flex items-center justify-center relative z-10 border border-green-400 bg-green-200 h-8 w-16 focus:outline-none hover:bg-green-300 border-r-0 rounded-l-lg border-t-4 border-b-4 border-l-4"
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
                Category One
              </router-link>
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
                Category Three
              </router-link>
              <router-link
                to="/collection"
                class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
              >
                Category Four
              </router-link>
              <router-link
                to="/collection"
                class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
              >
                Category Five
              </router-link>
              <router-link
                to="/collection"
                class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
              >
                Category Six
              </router-link>
              <router-link
                to="/collection"
                class="block px-4 py-2 text-gray-900 hover:bg-green-500 hover:text-white"
              >
                Category Seven
              </router-link>
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="What are you looking for..."
          class="border border-green-400 border-l-0 border-r-0 border-t-4 border-b-4 h-8 w-3/5 px-1 py-2 focus:outline-none"
        />
        <button
          class="border border-green-400 outline-none bg-green-200 flex items-center justify-center h-8 w-16 focus:outline-none hover:bg-green-300 border-l-0 rounded-r-lg border-r-4 border-t-4 border-b-4"
        >
          <i class="material-icons">search</i>
        </button>
      </div>
      <!-- <div class="flex items-center justify-center space-x-4">
        <button class="flex items-center justify-center hover:text-red-800">
          <i class="material-icons">mail_outline</i>
        </button>
        <button class="flex items-center justify-center hover:text-red-800">
          <i class="material-icons h-5 w-5">chat_bubble_outline</i>
        </button>
        <button class="flex items-center justify-center hover:text-red-800">
          <i class="material-icons">notifications_none</i>
        </button>
        <button class="flex items-center justify-center">
          <div class="h-8 w-8 rounded-full bg-gray-600"></div>
        </button>
      </div> -->
    </div>
  </header>
</template>

<script>
// import CategoryDropdown from "../components/CategoryDropdown";

export default {
  name: "Header",
  components: {
    // CategoryDropdown,
  },

  data() {
    return {
      isOpen: false,
    };
  },
};
</script>