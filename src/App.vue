<template>
  <div>
    <div id="app"></div>
    <router-view />
  </div>
</template>


<script>
import axios from 'axios' 
export default {
  name: "App",
  
  async created() {
      const response = await axios.get('user');

      this.$store.dispatch('user', response.data);
  },

};
</script>
